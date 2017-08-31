import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

export enum ExerciseDataType { Standard = 0, Custom = 1 };

export class DataLog {
  weight: number;
  reps: number;
  sets: number;
  date: Date;
  parent: string;
  exercise: string;
  type: ExerciseDataType;
}

export class User {
  _id: string;
  name: string;
  email: string;
  account_type: number;
  trainer_id: string;
  clients: string[];
  weight_machines: Exercise[];
  custom_weights: Exercise[];
  measurements: Measurement[];
  updated_at: string;
  created_at: string;
}

export class Exercise {
  id: string;
  name: string;
  type: ExerciseDataType;
  data: DataLog[];
  description: string;
  image: string;
}

export class Measurement {
  weight: number;
  thigh: number;
  arm: number;
  chest: number;
  waist: number;
}


@Injectable()
export class UserDataServiceProvider {

  // Events
  @Output() exerciseListChanged: EventEmitter<any> = new EventEmitter();

  // A temp variable that we're going to treat as the server for queries

  user_data: User;

  dataLogEndpoint: string;
  createExerciseEndpoint: string;

  httpOptions: RequestOptions;
  /*user_data = {
    id: "6786",
    account_type: 0, // set to 1 if a trainer
    name: "Brian Rodham",
    email :"brian.j.rodham@gmail.com",
    trainer_id:"trainerid", // Blank if they don't have one. 
    clients: [], // Contains client IDs. Treat as empty if not a trainer account.
    weight_machines: [
      {
        id: '1',
        name: 'Machine 1 - Chest Press',
        type: ExerciseDataType.Standard,
        data: [ 
          {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
           {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          }                                
        ]
      },
      {
        id: 'machine2',
        name: 'Machine 2 - Triceps Press',
        type: ExerciseDataType.Standard,
        data: [ 
          {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
        ]
      },
      {
        id: 'machine3',
        name: 'Machine 3 - Fly',
        type: ExerciseDataType.Standard,
        data: [ 
          {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
        ]
      }
    ],
    custom_weights: [
        {
        id: '1',
        name: 'Bicep Curl',
        description: "Curl the heavy thing until you can't curl no more.",
        type: ExerciseDataType.Custom,
        data: [ 
          {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
        ]
      },
      {
        id: '2',
        name: 'Bicep Curl DELUX',
        description: "Do bicep curl til you can't curl no more, then curl more.",
        type: ExerciseDataType.Custom,
        data: [ 
          {
            id: '6786-1-1',
            date: '2/1/2017',
            weight: '65',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-2',
            date: '2/2/2017',
            weight: '59',
            reps: '15',
            sets: '3'
          },
          {
            id:'6786-1-3',
            date: '2/3/2017',
            weight: '80',
            reps: '15',
            sets: '3'
          },
        ]
      },
    ],
    measurements:  [
      {
        date: "5/17",
        weight: 179,
        thigh: 5,
        arms: 5,
        chest: 5,
        hips: 5,
        waist: 5
      },
      {
        date: "6/17",
        weight: 185,
        thigh: 5,
        arms: 4,
        chest: 5,
        hips: 5,
        waist: 6
      },
      {
        date: "7/17",
        weight: 189,
        thigh: 8,
        arms: 8,
        chest: 8,
        hips: 5,
        waist: 5
      },
    ]
  }*/

  constructor(public http: Http) {
    var baseURL = "http://localhost:8000/api/";
    this.dataLogEndpoint = baseURL + 'log/create';
    this.createExerciseEndpoint = baseURL + 'custom/create';
    this.user_data = new User();

    // Creates the headers and options for the http requests
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    this.httpOptions = new RequestOptions({ headers: headers });
  }

  getName() {
    this.viewData();
    return this.user_data.name;
  }

  getEmail() {
    return this.user_data.email;
  }

  getUserId() {
    return this.user_data._id;
  }

  getClients() {
    return this.user_data.clients;
  }

  getWeightMachinesList() {
    var machines = [];
    for (let machine of this.user_data.weight_machines) {
      machines.push(machine);
    }
    return machines;
  }

  getMeasurements() {
    return this.user_data.measurements;
  }

  getCustomWeightList() {
    var exercises = [];
    for (let exercise of this.user_data.custom_weights) {
      exercises.push(exercise);
    }
    return exercises;
  }

  getExerciseData(dataType: ExerciseDataType, id: string) {
    var data = {};
    console.log("Attemping to get data for id: " + id);
    if (dataType == ExerciseDataType.Standard) {
      this.viewData();
      data = this.user_data.weight_machines.find(x => x.id == id);

      console.log("Data:");
      console.log(data);
    }
    else if (dataType == ExerciseDataType.Custom) {
      data = this.user_data.custom_weights.find(x => x.id == id);
      console.log("Custom Data:");
      console.log(data);
    }
    else {
      console.log("This should never happen");
      // Handle it some how. Maybe throw an exception?
    }


    if (data == undefined) {
      // Thow some sort of error and return gracefully
      console.log("FAILED TO FIND OBJECT WITH ID OF: " + id);
      data = {};
    }
    return data;
  }

  createCustomExercise(data: Exercise) {
    console.log("Creating new exercise type");
    console.log(JSON.stringify(data));

    this.http_createCustomExercise(data)
  }

  createNewMeasurement(data: Measurement) {

  }


  isTrainer(): Boolean {
    return (this.user_data.account_type == 1);
  }

  addExerciseLog(parentId: string, data: DataLog) {
    console.log("------------------------------------");
    console.log("Type: " + data.type);
    console.log("Parent: " + parentId);
    console.log(JSON.stringify(data));
    console.log("------------------------------------");

    if (data.type == ExerciseDataType.Standard) {
      this.user_data.weight_machines.find(x => x.id == parentId).data.push(data);
    }
    else if (data.type == ExerciseDataType.Custom) {
      this.user_data.custom_weights.find(x => x.id == parentId).data.push(data);
    }
    else {
      // Handle bad type errors
      console.log("Invalid exercise data type");
    }
    // var json_data = JSON.stringify(data);
    this.http_addExerciseLog(data);

  }

  deleteExerciseLog() {
    console.log("TO DO - Delete selected log from the list")
  }

  http_addExerciseLog(exerciseData: DataLog) {

    var jsonData = JSON.stringify(exerciseData);
    this.http.post(this.dataLogEndpoint, jsonData, this.httpOptions)
      .subscribe(data => {
        //console.log(data['_body']);
        var user = JSON.parse(data['_body']);

        if (data.status == 200) {
          console.log("Successfully created new log");
        }
        else {
          //TO DO - CACHE LOGS THAT DONT PUSH THROUGH AND DELIVER THEM AT A LATER DATE
          //observer.next(false);
        }
        //observer.complete();

      }, error => {
        console.log(error);// Error getting the data
      });
  }

  http_createCustomExercise(exerciseData: Exercise) {

    var myData = {
      user: this.user_data._id,
      exercise: exerciseData
    };

    var jsonData = JSON.stringify(myData);
    console.log("Json Data:");
    console.log(jsonData);
    this.http.post(this.createExerciseEndpoint, jsonData, this.httpOptions)
      .subscribe(data => {
        
        if (data.status == 200) {
          var id = JSON.parse(data['_body']).data;
          console.log("Successfully created new exercise");
          console.log(id);
          exerciseData.id = id;
          exerciseData.data = [];
          this.user_data.custom_weights.push(exerciseData);
          this.exerciseListChanged.emit(null);

        }
        else {
          //TO DO - CACHE LOGS THAT DONT PUSH THROUGH AND DELIVER THEM AT A LATER DATE
          //observer.next(false);
        }
        //observer.complete();

      }, error => {
        console.log(error);// Error getting the data
      });
  }

  clear() {
    this.user_data = new User();
  }

  viewData() {
    console.log("-------------------------");
    console.log(this.user_data);
    console.log("-------------------------");
  }

}

