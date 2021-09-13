<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
//        if (! $request->expectsJson()) {
//            return route('login');
//        }

        // Не делаем редирект потому-что у нас SPA все переходы между страницами осуществляет Vue, мы только отдаем текстовый ответ
        // return route('login');
        // redirect('/login');
        return response()->json([
            'message' => 'Unauthorized 1'
        ], 401);
    }
}
