import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeightRoomServiceProvider {

  constructor(public http: Http) {
    console.log('Hello WeightRoomServiceProvider Provider');
  }

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

}
