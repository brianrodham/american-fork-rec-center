<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class User extends Eloquent
{ 
    protected $fillable = array('name', 'email', 'password','account_type','trainer_id','clients','weight_machines','custom_weights','measurements');

    protected $collection = 'users_collection';

    public static function getUsers(){
        User::insertGetId(['test','test2',2]);
    }

    public static function test(){

    }
}
