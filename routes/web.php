<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\StructController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', 'StructController@index'); ///t
//Route::get('/{any}', [StructController::class, 'index'])->where('any', '.*'); ///t
Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');
//error_log('Some message here. 555555');
