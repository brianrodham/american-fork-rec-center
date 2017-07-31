<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class User extends Eloquent
{ 
    protected $fillable = array('username', 'password', 'gender','month','day','year','phone','email','agree');

    protected $collection = 'users_collection';

    public static function getUsers(){
        User::insertGetId(['test','test2',2]);
    }

    public static function test(){

    }
}
