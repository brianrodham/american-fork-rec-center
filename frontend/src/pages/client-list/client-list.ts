import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ClientList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-client-list',
  templateUrl: 'client-list.html'
})
export class ClientListPage {

  selectedItem: any;
  itemIcons: string[];
  itemNames: string[]
  items: Array<{title: string}>;
  infoIcon:string;
  //items:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.itemNames = ['Brian Rodham', 'Ellie Rodham','Brofist Mcguffin','Ian Scarborough','Sierra John','Shelby Davis','Bradley Jonnson'];

    this.items = [];
    for(let i = 0; i < this.itemNames.length; i++) {
      this.items.push({
        title: this.itemNames[i]
      });
  }
  }

  itemTapped(event, item) {
   
  }

}
