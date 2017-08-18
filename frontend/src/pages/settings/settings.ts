import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDataServiceProvider }  from '../../providers/user-data-service/user-data-service';

/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  name:string;
  email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userData:UserDataServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.name = this.userData.getName();
    this.email = this.userData.getEmail();
  }

}
