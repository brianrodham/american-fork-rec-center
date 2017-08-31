import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDataServiceProvider, Measurement }  from '../../providers/user-data-service/user-data-service';

/*
  Generated class for the CreateMeasurementPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-measurement',
  templateUrl: 'create-measurement.html'
})
export class CreateMeasurementPage {

  private measurement = new Measurement();

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserDataServiceProvider) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMeasurementPage');
  }

  submit(event){
    console.log("Submitting new measurement");
    this.userData.createNewMeasurement(this.measurement);
  }

}
