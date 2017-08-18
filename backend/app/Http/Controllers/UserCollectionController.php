<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserCollectionController extends Controller
{
    /*function connectionTest(){
        //$user = new User;
      $user = User::create(array(
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
        ));

        //echo User::find($user['_id']);
        echo User::all();

    }*/

    function index(){
        return User::all();
    }

    // Returns a user matching username/password. Used to log in. 
    function get(Request $request){
        $data = $request->all();
        //echo $data['email'];
        $user = User::where([ 'email' => $data['email'], 'password' => $data['password'] ])->first();
        
        if (isset($user['name'])) {       
            $user->found = true;
            unset($user->password);
        }
        else {
            $user = ["found" => false];
        }
        return $user;
    }

    // Creates a new user document in the DB
    function create(Request $request){
        $data = $request->all();
        $userId = uniqid();
        $user = User::create(array(
            //'id' => $userId,
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password'],
            'account_type'=> 0, // set to 1 if a trainer
            'trainer_id' => "", // Blank if they don't have one. 
            'clients' => [], // Contains client IDs. Treat as empty if not a trainer account.
            'weight_machines' => $this->helper_getMachineList(),
            'custom_weights' => [],
            'measurements' =>  []
        ));

        echo $user['_id'];
    }

    function delete($id){
        User::destory($id);
    }

    function update(Request $request, $id){
        $data = $request->all();        
    }


    /* Helper Functions */
    function helper_getMachineList(){

        $machines = [];

        // This should probably be loaded from some kind of external file
        $itemNames = ['Machine 1 - Chest Press','Machine 2 - Triceps Press', 'Machine 3 - Fly', 'Machine 4 - Shoulder Press', 'Machine 5 - Lateral Raise', 'Machine 6 - Pulldown', 'Machine 7 - Row/Real Deltoid', 'Machine 8 - Biceps Curl','Machine 9 - Torso Rotation', 'Machine 10 - Abdominal','Machine 11 - Back Extention', 'Machine 17 - Hip Abduction', 'Machine 18 - Hip Adduction', 'Machine 19 - Leg Extention', 'Machine 20 - Seated Leg Curl', 'Machine 21 - Seated Leg Press'];

        foreach($itemNames as $key => $value){
            $item = array(
                'id'=>$key,
                'name'=>$value,
                'type'=>'ExerciseDataType.Standard',
                'data' => []
            );
            array_push($machines, $item);
        }

        return $machines;

     
    }
 
}
