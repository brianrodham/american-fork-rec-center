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
        $exercise = $data["exercise"];
        $user = User::find($parent);

        //Check what kind of log it is
        if($type == LogType::Standard){
            $exercises = $user->weight_machines;

            //$user->weight_machines[$exercise][0]["data"]->push($data);
           // return $exercises[$exercise]["data"];
            array_push($exercises[$exercise]["data"], $data);
            $user->weight_machines = $exercises;
            //array_push($user["weight_machines"][$exercise][0]["data"], $data);
        }
        else if($type == LogType::Custom){
            $exercises = $user->custom_exercises;
            array_push($exercises[$exercise][0]["data"], $data);
            $user->custom_exercises = $exercises;
        }
        else {
            throw ("Invalid log type"); //Ironically crashes
        }

        $user->save();
        return $user;

    }

    function findObjectById($id, $array){      

        foreach ( $array as $element ) {
            if ( $id == $element->id ) {
                return $element;
            }
        }

        return false;
    }
}
