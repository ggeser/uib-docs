<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StructController;
use App\Http\Controllers\DepartController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

    error_log('@@ api.php');

    Route::group(['prefix' => 'auth'], function () {
        Route::post('login'     , [AuthController::class, 'login']);
        Route::post('register'  , [AuthController::class, 'register']);

        Route::group(['middleware' => 'auth:sanctum'], function() {
            Route::get('logout' , [AuthController::class, 'logout']);
            Route::get('user'   , [AuthController::class, 'user']);
        });
    });

    Route::group(['middleware' => 'auth:sanctum'], function() {
        Route::get( '/apps/struct/structslist/{id}' , [StructController::class, 'getStructsList'   ]);
        Route::get( '/apps/struct/structs/{id}'     , [StructController::class, 'getStructById'    ]);
        Route::post('/apps/struct/structs'          , [StructController::class, 'addStruct'        ]);

        Route::get( '/apps/user/users'      , [UserController::class, 'getUsers'     ]);
        Route::get( '/apps/user/users/{id}' , [UserController::class, 'getUserById'  ]);
        Route::post('/apps/user/users'      , [UserController::class, 'addUser'      ]);

        Route::get( '/apps/depart/departslist/{id}' , [DepartController::class, 'getDepartsList'   ]);
        Route::get( '/apps/depart/departs/{id}'     , [DepartController::class, 'getDepartById'    ]);
        Route::post('/apps/depart/departs'          , [DepartController::class, 'addDepart'        ]);
    });






