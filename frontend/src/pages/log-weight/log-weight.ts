import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
//import {CalendarModule} from 'primeng/primeng';
import { UserDataServiceProvider, ExerciseDataType, DataLog }  from '../../providers/user-data-service/user-data-service';

/*
  Generated class for the LogWeight page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-log-weight',
  templateUrl: 'log-weight.html'
})
export class LogWeightPage {

  private currentItem;
  private parent;
  private data = new DataLog();


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public userData:UserDataServiceProvider,
    private alertCtrl: AlertController
    ) {
    this.currentItem = navParams.get('item');
    this.parent = navParams.get('parent');
    this.data.weight = 20;
    this.data.reps = 15;
    this.data.sets = 3;
    this.data.date = new Date();
    this.data.parent = userData.getUserId();
    this.data.exercise = this.currentItem.id;
    this.data.type = this.currentItem.type;
  }

  ionViewDidLoad() {
  }

  private submit(event, item) {
      //console.log("Current Item: " + this.currentItem);
      //console.log("Data:");
     // console.log(this.data);

     // Checks to see if there is already a log for the selected date/machine combo

      if(this.isUniqueDate(this.data.date, parent)){
        this.userData.addExerciseLog(this.currentItem.id, this.data);
        this.parent.lineChart.refresh();
        this.parent.getMachineData(this.currentItem.id);
        this.navCtrl.pop();
      }
      else {
        this.displayError();
      }

  }

  private isUniqueDate(date, parent) {
    var unique:Boolean = true;
    /*console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(this.parent.data);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");*/

    for(let log of this.parent.data){
      console.log("Comparing " + date + " to " + log.date);
      if(date == log.date){
        unique = false;
      }
    }
    return unique;
  }

  private displayError(){
   let alert = this.alertCtrl.create({
      title: 'LOG FAILED',
      subTitle: "There is already a log for this machine for that date. Please delete the old entry and try again",
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
