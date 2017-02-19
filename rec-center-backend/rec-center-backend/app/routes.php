<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::post('/v1/account/create','UserController@create');
Route::post('/v1/account/login','UserController@login');
Route::post('/v1/account/update','UserController@update');

Route::post('/v1/trainer/clients/get','TrainerController@getClients');

