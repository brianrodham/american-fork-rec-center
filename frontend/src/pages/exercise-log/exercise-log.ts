import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LogWeightPage } from '../log-weight/log-weight';

import { UserDataServiceProvider, ExerciseDataType } from '../../providers/user-data-service/user-data-service';

@Component({
  selector: 'page-exercise-log',
  templateUrl: 'exercise-log.html',
  providers: [UserDataServiceProvider]
})
export class ExerciseLogPage {
  selectedItem: any;
  machineData:any;
  data:any;
  //@ViewChild('exerciseLog') dataTable;
  
  private labels = [];
  private datasets = [
    {
      label: "Weight",
      data:[]
    }
  ];

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(56,126,245,0.5)',
      borderColor: 'rgba(56,126,245,0.2)',
      pointBackgroundColor: 'rgba(55,122,245,0.5)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(56,126,245,0.5)'
    }];


  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public userDataService: UserDataServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    //this.machineData = this.userDataService.getRecordsById(this.selectedItem.id);
    this.machineData = this.userDataService.getExerciseData(this.selectedItem.type, this.selectedItem.id )
    this.data = this.machineData.data;
    this.getMachineData(this.selectedItem.id);



    console.log("Data:");
    console.log(this.data);
  }

  ngAfterViewInit() {
  }

  private getMachineData(machineId){

    for(let log of this.data){
      // Populate arrays for graph
      var date = log.date.substr(0, log.date.lastIndexOf("/"));
      this.labels.push(date);
      this.datasets[0].data.push(log.weight);    
      var dataTable:HTMLElement = document.getElementById("excerciseLog");
    }
  }

  private editRecord(id){
    console.log("Editing Record: " + id);
  }

  private deleteRecord(id){
    console.log("Deleting Record: " + id);
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Are you sure you want to delete this entry?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Delete clicked');
          }
        }
      ]
    });
    alert.present();
  }

  private chartHovered(){

  }

  private chartClicked(){

  }

  private newLog(event, item) {
    this.navCtrl.push(LogWeightPage, {
      item: item
    });
  }
}
