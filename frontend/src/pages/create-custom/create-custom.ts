import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDataServiceProvider,ExerciseDataType, DataLog, Exercise } from '../../providers/user-data-service/user-data-service';

/*
  Generated class for the CreateCustomPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/



@Component({
  selector: 'page-create-custom',
  templateUrl: 'create-custom.html'
})
export class CreateCustomPage {
  
  data = new Exercise();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public userData:UserDataServiceProvider) {
    
    }
  
    private submit(event, item) {
      this.userData.createCustomExercise(this.data);
      this.navCtrl.pop();
  }

}
