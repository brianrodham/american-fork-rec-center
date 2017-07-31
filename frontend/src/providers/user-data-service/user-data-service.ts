import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export enum ExerciseDataType { Standard = 0, Custom = 1 };

export class DataLog{
  weight:number;
  reps:number;
  sets: number;
  date: Date;
}

@Injectable()
export class UserDataServiceProvider {

  // A temp variable that we're going to treat as the server for queries
  user_data = {
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
  }

  constructor(public http: Http) {
    console.log('Hello UserDataServiceProvider Provider');
  }

 // Outdated
  getRecordsById(exorciseId){
    // Format for IDs : [user_id]-[machine-id]-[log-id]
    var exorcise = {
      id: 'machine1',
      name: 'Chest Press',
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
          id:'6786-1-4',
          date: '2/4/2017',
          weight: '81',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-5',
          date: '2/5/2017',
          weight: '56',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-6',
          date: '2/5/2017',
          weight: '56',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-7',
          date: '2/6/2017',
          weight: '55',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-8',
          date: '2/7/2017',
          weight: '40',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-9',
          date: '2/8/2017',
          weight: '100',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-10',
          date: '2/9/2017',
          weight: '30',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-11',
          date: '2/10/2017',
          weight: '130',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-12',
          date: '2/11/2017',
          weight: '65',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-13',
          date: '2/12/2017',
          weight: '59',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-14',
          date: '2/13/2017',
          weight: '80',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-15',
          date: '2/14/2017',
          weight: '81',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-16',
          date: '2/15/2017',
          weight: '56',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-17',
          date: '2/16/2017',
          weight: '56',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-18',
          date: '2/17/2017',
          weight: '55',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-19',
          date: '2/18/2017',
          weight: '40',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-20',
          date: '2/19/2017',
          weight: '100',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-21',
          date: '2/20/2017',
          weight: '30',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-22',
          date: '2/21/2017',
          weight: '130',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-23',
          date: '2/22/2017',
          weight: '65',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-24',
          date: '2/23/2017',
          weight: '59',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-25',
          date: '2/24/2017',
          weight: '80',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-26',
          date: '2/25/2017',
          weight: '81',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-27',
          date: '2/26/2017',
          weight: '56',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-28',
          date: '2/27/2017',
          weight: '89',
          reps: '15',
          sets: '3'
        },
        {
          id:'6786-1-29',
          date: '2/28/2017',
          weight: '55',
          reps: '15',
          sets: '3'
        }
      ] 
    }
    return exorcise;
  }

  isTrainer():Boolean{
    return (this.user_data.account_type == 1);
  }

  getClients(){
    return this.user_data.clients;
  }

  getWeightMachinesList(){
      var machines = [];
      for(let machine of this.user_data.weight_machines){
        machines.push(machine);
      }
      return machines;
  }


  getCustomWeightList(){
      var exercises = [];
      for(let exercise of this.user_data.custom_weights){
        exercises.push(exercise);
      }
      return exercises;
  }

  getExerciseData(dataType: ExerciseDataType, id){
    var data = {};
    console.log("Attemping to get data for id: " + id);
    if (dataType == ExerciseDataType.Standard ){
      data = this.user_data.weight_machines.find(x => x.id == id);

      console.log("Data:");
      console.log(data);
    }
    else if (dataType == ExerciseDataType.Custom){
      data = this.user_data.custom_weights.find(x => x.id == id);
    }
    else {
      console.log("This should never happen");
      // Handle it some how. Maybe throw an exception?
    }


    if(data == undefined){
      // Thow some sort of error and return gracefully
      data = {};
    }
    return data;
  }

  addNewExercise(type:ExerciseDataType, parentId: string,  data: DataLog){
      console.log("------------------------------------");
      console.log("PRETENDING TO SAVE DATA: ");
      console.log("Type: " + type);
      console.log("Parent: " + parentId);
      console.log(data);
      console.log("------------------------------------");
  }
}

