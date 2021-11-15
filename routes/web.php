<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    if(session('token')) {
        return view('main');
    } else {
        return view('auth');
    }
});

Route::get('/shop', function () {
        return view('shop');
});

Route::post('/session',  [App\Http\Controllers\SessionController::class, 'setSession']);
Route::delete('/session',  [App\Http\Controllers\SessionController::class, 'removeSession']);

