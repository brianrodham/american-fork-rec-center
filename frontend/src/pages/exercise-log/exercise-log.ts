import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LogWeightPage } from '../log-weight/log-weight';

import { UserDataServiceProvider, ExerciseDataType } from '../../providers/user-data-service/user-data-service';
//import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { UIChart } from 'primeng/primeng';





@Component({
  selector: 'page-exercise-log',
  templateUrl: 'exercise-log.html'
 // providers: [UserDataServiceProvider]
})
export class ExerciseLogPage {
  selectedItem: any;
  machineData:any;
  data:any;
  chartData:any;

  @ViewChild('lineChart') lineChart: UIChart; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public userData: UserDataServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');



    console.log("Selected Item:");
    console.log(this.selectedItem);

    this.machineData = this.userData.getExerciseData(this.selectedItem.type, this.selectedItem.id )
    this.data = this.machineData.data;

    this.chartData = {
      labels: [],
      datasets: [
        {
          label: 'Weight',
          data: [],
          fill: false,
          borderColor: '#3783D3'
        }
      ]
    }

    this.getMachineData(this.selectedItem.id);

  }

  ngAfterViewInit() {
    console.log("Chart Element");
    console.log(this.lineChart);
    var that = this;
    setTimeout(function(){ that.lineChart.refresh(); }, 500);
  }

  private getMachineData(machineId){
    console.log("------------------------------------");
    console.log("Getting machine data");
    console.log(this.data);
    console.log("------------------------------------");
    //this.resetChart();
   // console.log("Labels - Should be empty:")
    //console.log(this.data.labels);   
    // Sorts the datalog objects by date
    console.log("Sorting data");
    this.data.sort(function(a,b){
      var dateA = new Date(b.date).valueOf();
      var dateB = new Date(a.date).valueOf();
      return dateB - dateA;
    });

    var i = 0;
    for(let log of this.data){
     // console.log("Log:");
      //console.log(log);
      var date = log.date.substr(log.date.indexOf("-") + 1, log.date.length);
      this.chartData.labels.push(date);
      //this.chartData.labels.push("Hi");
      this.chartData.datasets[0].data.push(log.weight);  
      i++;
    }
    this.chartData.datasets = this.chartData.datasets.slice(); // Makes the chart realize it's been updated. Don't delete.
    this.chartData.labels = this.chartData.labels.slice();
  
    console.log("Labels:")
    console.log(this.chartData.labels);
    console.log("Dataset:");
    console.log(this.chartData.datasets[0].data);

   // this.chartData.datasets[0].data.reverse();
   this.data.reverse();
  // this.chart.reinit();
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
            this.userData.deleteExerciseLog();
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
    this.chartData.labels.length = 0;
    this.chartData.labels = [];
    this.chartData.datasets[0].data = [];
    this.chartData.datasets = this.chartData.datasets.slice(); // Makes the chart realize it's been updated. Don't delete.
    this.chartData.labels = this.chartData.labels.slice();
  }

  private newLog(event, item) {
    this.navCtrl.push(LogWeightPage, {
      item: item,
      parent: this
    });
  }

  private displayInfo(){
    var info = this.machineData.description;
    if(info == ""){
      info = "No description avaliable for this exercise";
    }
    
    console.log("Info: ");
    console.log(info);
      let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: info,
      buttons: ['Dismiss']
    });
    alert.present();
  }



}
