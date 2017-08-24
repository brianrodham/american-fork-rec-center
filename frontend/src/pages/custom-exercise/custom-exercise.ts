import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable, Subject, Subscription } from 'rxjs/Rx';

import { ExerciseLogPage } from '../exercise-log/exercise-log';
import { UserDataServiceProvider, ExerciseDataType }  from '../../providers/user-data-service/user-data-service';
import { CreateCustomPage } from '../create-custom/create-custom';
/*
  Generated class for the CustomExercisePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-custom-exercise',
  templateUrl: 'custom-exercise.html'
})
export class CustomExercisePage {
  selectedItem: any;
  itemIcons: string[];
  weightList: any[]
  items: Array<{id:string, title: string, type: ExerciseDataType, icon: string}>;
  infoIcon:string;
  //items:string[];

  newCustomExerciseListener: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData:UserDataServiceProvider) {

    this.infoIcon = "ion-information-circled";

    this.weightList = userData.getCustomWeightList();  
    this.buildExerciseList();


    // Updates the list whenever a new exercise is created
    this.newCustomExerciseListener = userData.exerciseListChanged.subscribe(
      () => {
        this.weightList = userData.getCustomWeightList();
        this.buildExerciseList();
        console.log("Event caught");
      }
    );

  }

  itemTapped(event, item) {
    this.navCtrl.push(ExerciseLogPage, {
      item: item
    });
  }

  createNewExercise(){
     this.navCtrl.push(CreateCustomPage);
  }

  buildExerciseList(){
    console.log("Custom weight list:");
    console.log(this.weightList);
    this.items = [];
    for (let machine of this.weightList){
      this.items.push({
        id: machine.id,
        title: machine.name,
        type: ExerciseDataType.Custom,
        icon: this.infoIcon
      });
    }
  }

}
