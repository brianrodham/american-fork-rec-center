import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LogWeightPage } from '../log-weight/log-weight';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

/*public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40, 100,30,130,200], label: 'Series A'}
  ];

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';*/

  private datasets = [
    {
      label: "Weight",
      data: [65, 59, 80, 81, 56, 55, 40, 100,30,130]
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

  private labels = ['2/1', '2/2', '2/3', '2/4', '2/5', '2/6', '2/7', '2/8', '2/9', '2/10'];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
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
