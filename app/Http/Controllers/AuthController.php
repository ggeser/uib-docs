<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;
use Illuminate\Support\Facades\Log;


class AuthController extends Controller
{
    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function register(Request $request)
    {

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|string',
            'c_password' => 'required|same:password'
        ]);

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        if ($user->save()) {

            $user->assignRole('basic-user');

            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->plainTextToken;

            $tokenResult = $user->createToken('Personal Refresh Token');
            $refreshToken = $tokenResult->plainTextToken;

            $userData = array(
                "email" => $user->email,
                //"password" => $user->password,
                "username" => $user->name,
                "fullName" => $user->name,
                "avatar" => null,
                "role" => "admin",
                "ability" => array(array(
                    "action" => "manage",
                    "subject" => "all",
                ))
            );

            return response()->json([
                'message' => 'Successfully created user!',
                'userData'=> $userData,
                'accessToken' => $token,
                'refreshToken' => $refreshToken,
                'userid' => $user->id,
            ], 201);


        } else {
            return response()->json(['error' => 'Provide proper details']);
        }
    }


    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     */

    public function login(Request $request)
    {
        error_log('lara login 111');
        error_log('$request->remember_me = '. $request->remember_me);

        $status_remember_me = false;
        if ( $request->remember_me) {
            $status_remember_me = true;
        }

        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            $status_remember_me => 'boolean',
        ]);

        error_log('lara login 2');


        $credentials = request(['email', 'password']);
        $email = request('email');
        $password = request('password');

        //if (!Auth::attempt($credentials, $status_remember_me)) {
        if (!Auth::attempt(['email' => $email, 'password' => $password], $status_remember_me)) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $request->session()->regenerate();

//        $user = Auth::user(); ///t
//        $canSeeId = $user->id;
//        error_log('lara login $canSeeId '. $canSeeId);

        $user = $request->user();

        error_log('lara login 3 getRoleNames '. $user->getRoleNames()[0]);

        $fullName = $user->familia . " " . $user->name . " " . $user->otchestvo;

        $role = $user->getRoleNames()[0];

        $role = 'admin';            ///t пока отправляю во фронт эти role и ability
        $cur_ability = array(array(
            "action" => "manage",
            "subject" => "all",
        ));

//        if ($role === "super-admin") {
//            $role = "admin";
//            $cur_ability = array(array(
//                "action" => "manage",
//                "subject" => "all",
//            ));
//        }
//        else {
//            $role = "client";
//            $cur_ability = array( ///t
//                array(
//                    "action" => "read",
//                    "subject" => "ACL",
//                ),
//                array(
//                    "action" => "read",
//                    "subject" => "Auth",
//                ),
//            );
//        }

        error_log('lara login 5 $role '. $role);

        $userData = array(
            "email" => $user->email,
            //"password" => $user->password,
            "username" => $user->name,
            "fullName" => $fullName,
            "avatar" => $user->avatar,
            "role" => $role,
            "ability" => $cur_ability,
        );


        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;

        $tokenResult = $user->createToken('Personal Refresh Token');
        $refreshToken = $tokenResult->plainTextToken;

        return response()->json([
            'message' => 'Successfully login user!',
            'userData'=> $userData,
            'accessToken' => $token,
            'refreshToken' => $refreshToken,
            'userid' => $user->id,
        ], 201);

    }


    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }


    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        error_log("logout");

        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);

    }

}
