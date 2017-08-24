<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class LogType {
    const Standard = 0;
    const Custom = 1;
}

class ExerciseLogController extends Controller
{
    function create(Request $request){

        $data = $request->all();
        $type = $data["type"];
        $parent = $data["parent"];
        $exerciseId = $data["exercise"];
        $user = User::find($parent);

        //Check what kind of log it is
        if($type == LogType::Standard){
            $exercises = $user->weight_machines;
            // Cycles through the exercise list by reference, and then adds the new data to the exercise with the correct ID
            foreach($exercises as &$exer) {
                if($exer["id"] == $exerciseId){
                    array_push($exer["data"], $data);                   
                }
            }
            $user->weight_machines = $exercises;
        }
        else if($type == LogType::Custom){
            $exercises = $user->custom_weights;
            // Cycles through the exercise list by reference, and then adds the new data to the exercise with the correct ID
            foreach($exercises as &$exer) {
                if($exer["id"] == $exerciseId){
                    array_push($exer["data"], $data);                   
                }
            }
            $user->custom_weights = $exercises;
        }
        else {
            throw ("Invalid log type"); //Ironically crashes
        }

        $success = $user->save();
        if ($success){
            $code = 200;
            $response = ['data' => $success];
        }
        else {
            $code = 500;
            $response = ['error' => 'Failed to create new user. Unknown reason'];
        }
        return response()->json($response,$code);
       // return $user;

    }

    // Unused?
    function findObjectById($id, $array){      

        foreach ( $array as $element ) {
            if ( $id == $element->id ) {
                return $element;
            }
        }

        return false;
    }
}
