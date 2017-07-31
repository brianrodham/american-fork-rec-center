<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserCollectionController extends Controller
{
    function connectionTest(){
        //$user = new User;
     /* $user = User::create(array(
        'username' => "brian.j.rodham@gmail.com",
        'fullname' => "Brian Rodham",
        'password' => "pasta",
        'gender' => "Attack helicopter",
        'month' => "October",
        'day' => "19",
        'year' => "1991",
        'phone' => "12456890",
        'email' => "brian.j.rodham@gmail.com",
        'agree' => true
        ));*/

        //echo User::find($user['_id']);
        echo User::all();

    }
}
