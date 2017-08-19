<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', 'UserCollectionController@index'); // Creates a new partner lead

Route::post('/user/get', 'UserCollectionController@get'); // Finds a user
Route::post('/user/create', 'UserCollectionController@create'); // Creates a user
Route::put('/user/update', 'UserCollectionController@create'); // Updates an existing user document
Route::delete('/user/delete/{id}', 'UserCollectionController@delete'); // Deletes a specific user. Will probably never be allowed outside of testing

Route::post('/log/create', 'ExerciseLogController@create');