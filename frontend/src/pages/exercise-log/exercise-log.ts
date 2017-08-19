import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LogWeightPage } from '../log-weight/log-weight';

import { UserDataServiceProvider, ExerciseDataType } from '../../providers/user-data-service/user-data-service';
//import { BaseChartDirective } from 'ng2-charts/ng2-charts';





@Component({
  selector: 'page-exercise-log',
  templateUrl: 'exercise-log.html'
 // providers: [UserDataServiceProvider]
})
export class ExerciseLogPage {
  selectedItem: any;
  machineData:any;
  data:any;
  //@ViewChild('exerciseLog') dataTable;
   //@ViewChild(baseChart) chart: baseChart;

  private labels = [];
  private datasets = [
    {
      label: "Weight",
      data:[]
    }
  ];

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(5,101,201,0.8)',
      borderColor: 'rgba(5,101,201,0.2)',
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public userData: UserDataServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.machineData = this.userData.getExerciseData(this.selectedItem.type, this.selectedItem.id )
    this.data = this.machineData.data;


    this.getMachineData(this.selectedItem.id);

    console.log("Data:");
    console.log(this.data);
  }

  ngAfterViewInit() {
  }

  private getMachineData(machineId){

    this.resetChart();

    // Sorts the datalog objects by date
    console.log("Sorting data");
    this.data.sort(function(a,b){
      var dateA = new Date(b.date).valueOf();
      var dateB = new Date(a.date).valueOf();
      return dateB - dateA;
    });

    var i = 0;
    for(let log of this.data){
      // Populate arrays for graph
      //var date = log.date.substr(0, log.date.lastIndexOf("/"));
      console.log("Log:");
      console.log(log);
      var date = log.date.substr(0, log.date.lastIndexOf("/"));
      //this.labels.push(date);
      this.labels.push("");
      this.datasets[0].data.push(log.weight);  
      i++;
     // var dataTable:HTMLElement = document.getElementById("excerciseLog");
    }
    //document.getElementById("dataChart").
    this.datasets = this.datasets.slice(); // Makes the chart realize it's been updated. Don't delete.
    this.labels.slice();
    console.log("Labels:")
    console.log(this.labels);
    console.log("Dataset:");
    console.log(this.datasets[0]);
  // document.getElementById("dataChart").ngOnChanges({})
    this.data.reverse();

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
    console.log("Hovering over chart");
  }

  private chartClicked(){

  }

  private resetChart(){
    console.log("Resetting chart data");
    this.labels = [];
    this.datasets[0].data = [];
    this.datasets = this.datasets.slice(); // Makes the chart realize it's been updated. Don't delete.
    this.labels.slice();
  }

  private newLog(event, item) {
    this.navCtrl.push(LogWeightPage, {
      item: item,
      parent: this
    });
  }



}
