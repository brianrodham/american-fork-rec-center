<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');

    static function login($username, $password)
    {   
        error_log("Username: " . $username);
        error_log("Password: " . $password);
        $user = User::where('email','=',$username)->where('password','=', $password)->get();
        $user = $user->toArray();
        error_log(print_r($user, true));
        if (count($user)) {
            $user = $user[0];
        }
        else {
            error_log("Returning a blank array");
            $user = array();
        }
        return $user;
    }
    
    // Checks if the email exists in the database
    static function validateEmail($email){
        $partner = Partner::where('username','=',$email)->get();
        $partner = $partner->toArray();
        if(!count($partner)){
            $id = 0;
        }
        else {
            
            $id = $partner[0]["id"];
        }
        return $id;
    }
    
    static function changePassword($user_id,$password){
        Partner::where('id','=',$user_id)->update(array('password' => $password));
        return true;
    }
    
}
