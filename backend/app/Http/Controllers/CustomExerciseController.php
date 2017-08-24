<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class CustomExerciseController extends Controller
{
     function create(Request $request){
         $data = $request->all();

         $user = User::find($data['user']);     

         $exercise = $data["exercise"];
         $newId = uniqid();

         $exerciseData = [];
         $exerciseData['id'] = $newId;  // Creates a unique id for the exercise
         $exerciseData['name'] = $exercise['name'];
         $exerciseData['type'] = "ExerciseDataType.Custom";
         $exerciseData['data'] = [];
         $exerciseData['description'] = $exercise['desc'];

         $exercises = $user->custom_weights;
         array_push($exercises, $exerciseData);
         $user->custom_weights = $exercises;
         $success = $user->save();

         if ($success){
            $code = 200;
            $response = ['data' => $newId];
        }
        else {
            $code = 500;
            $response = ['error' => 'Failed to create new exercise. Unknown reason'];
        }
        return response()->json($response,$code);
     }

}
