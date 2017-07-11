import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import {CalendarModule} from 'primeng/primeng';

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


 // private items = [];
  //private incAmount = 5;
  //private scrollInc = 100;
  //private currentItem = this.items[6];
 // private reps = [];
  private currentItem;

  private data = {
    weight: 20,
    reps: 15,
    sets: 3,
    date: new Date()
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogWeightPage');
  }

  private submit(event, item) {
      console.log("Current Item: " + this.currentItem);
      console.log("Data:");
      console.log(this.data);
  }

}
