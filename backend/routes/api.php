<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::group([
    'prefix' => 'auth',
    'namespace' => 'Auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('cadastro', 'AuthController@cadastro');

    Route::group([
        'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('perfil', 'AuthController@user');
    });
});

Route::group([
    'middleware' => 'auth:api'
], function () {
    Route::resource('usuarios', 'UsersController')->only(['index', 'show']);
});
