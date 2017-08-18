import { Component } from '@angular/core';
import { UserDataServiceProvider } from '../../providers/user-data-service/user-data-service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  name:string;
  constructor(public userData:UserDataServiceProvider) {
    this.name = this.userData.getName();
  }
}
