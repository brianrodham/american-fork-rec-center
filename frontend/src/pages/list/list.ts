import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ExerciseLogPage } from '../exercise-log/exercise-log';
import { UserDataServiceProvider, ExerciseDataType }  from '../../providers/user-data-service/user-data-service';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  itemIcons: string[];
  machineList: any[];
  items: Array<{id:string, title: string, type: ExerciseDataType, icon: string}>;
  infoIcon:string;
  //items:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData:UserDataServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    this.infoIcon = "ion-information-circled";

    //this.itemNames = ['Machine 1 - Chest Press','Machine 2 - Triceps Press', 'Machine 3 - Fly', 'Machine 4 - Shoulder Press', 
    //'Machine 5 - Lateral Raise', 'Machine 6 - Pulldown', 'Machine 7 - Row/Real Deltoid', 'Machine 8 - Biceps Curl','Machine 9 - Torso Rotation', 'Machine 10 - Abdominal',
    //'Machine 11 - Back Extention', 'Machine 17 - Hip Abduction', 'Machine 18 - Hip Adduction', 'Machine 19 - Leg Extention', 'Machine 20 - Seated Leg Curl', 'Machine 21 - Seated Leg Press'];
    this.machineList = userData.getWeightMachinesList();

    this.items = [];
    for (let machine of this.machineList){
      console.log(machine);
      this.items.push({
        id: machine.id,
        title: machine.name,
        type: ExerciseDataType.Standard,
        icon: this.infoIcon
      });
    }

  }

  itemTapped(event, item) {
    this.navCtrl.push(ExerciseLogPage, {
      item: item
    });
  }
}
