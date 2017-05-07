import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  itemIcons: string[];
  itemNames: string[]
  items: Array<{title: string, icon: string}>;
  infoIcon:string;
  //items:string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    //this.itemIcons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    //'american-football', 'boat', 'bluetooth', 'build'];
    this.infoIcon = "ion-information-circled";

    this.itemNames = ['Machine 1 - Chest Press','Machine 2 - Triceps Press', 'Machine 3 - Fly', 'Machine 4 - Shoulder Press', 
    'Machine 5 - Lateral Raise', 'Machine 6 - Pulldown', 'Machine 7 - Row/Real Deltoid', 'Machine 8 - Biceps Curl','Machine 9 - Torso Rotation', 'Machine 10 - Abdominal',
    'Machine 11 - Back Extention', 'Machine 17 - Hip Abduction', 'Machine 18 - Hip Adduction', 'Machine 19 - Leg Extention', 'Machine 20 - Seated Leg Curl', 'Machine 21 - Seated Leg Press'];

    this.items = [];
    for(let i = 0; i < this.itemNames.length; i++) {
      this.items.push({
        title: this.itemNames[i],
    /*    note: 'This is item #' + i,*/
        //icon: this.itemIcons[i]
        icon:this.infoIcon
      });
  }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
