import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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


  private items = [];
  private incAmount = 5;
  private scrollInc = 100;
  private currentItem = this.items[6];
  private reps = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 5; i < this.scrollInc; i += this.incAmount) {
      this.items.push(i);
    }
    for (let i = 1; i <= 30; i++) {
      this.reps.push(i);
    }

    console.log(this.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogWeightPage');
  }

  gotScrolled(event) {
    console.log("Scrolling");
  }


  doInfinite = function (infiniteScroll) {
    setTimeout(() => {
      var temp = this.items.length * this.incAmount;
      for (let i = temp; i < temp + this.scrollInc; i+=this.incAmount) {
        this.items.push(i);
      }
      infiniteScroll.complete();
    }, 500);
  }

  private submit(event, item) {
      console.log("Current Item: " + this.currentItem);
  }

}
