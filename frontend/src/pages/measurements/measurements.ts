import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDataServiceProvider, Measurement } from '../../providers/user-data-service/user-data-service';
import { CreateMeasurementPage } from '../create-measurement/create-measurement';
import { ChartModule } from 'primeng/primeng';

/*
  Generated class for the MeasurementsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-measurements',
  templateUrl: 'measurements.html'
})
export class MeasurementsPage {
  data: any;
  /*private labels = ["4/15","5/15","6/15","7/15","8/15","9/15"];
  private datasets = [
  /*  {
      label: "Weight",
      data:[200,199,190]
    },*/
    /*{
      label: "Thigh",
      data:[19.75,20.75,22,23,24,25]
    },
    {
      label: "Arm",
      data: [12.75,12.5,13,14,15,16]
    },
    {
      label: "Chest",
      data: [39.75,39,40,41,42,43]
    },
    {
      label: "Waist",
      data: [36.75,36.75,37,36,35,36]
    }
  ];*/


/*  public chartColors: Array < any > = [
  { // first color
    backgroundColor: 'rgba(5,101,201,0.8)',
    borderColor: 'rgba(5,101,201,0.2)',
    pointBackgroundColor: 'rgba(55,122,245,0.5)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(56,126,245,0.5)'
  }

];

  private options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};*/
private measurements: Measurement[];

constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public userData:UserDataServiceProvider) {
  this.measurements = this.userData.getMeasurements();

  this.data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#4bc0c0'
    },
    {
      label: 'Second Dataset',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: '#565656'
    }
  ]
}

}

ionViewDidLoad() {
}

newMeasurements(event){
  this.navCtrl.push(CreateMeasurementPage);
}

deleteRecord(id){

}
}
