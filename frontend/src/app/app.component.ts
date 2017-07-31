import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { CustomExercisePage } from '../pages/custom-exercise/custom-exercise'
import {ClientListPage} from '../pages/client-list/client-list';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { ChartsModule } from 'ng2-charts/ng2-charts';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      /*{ title: 'Login', component: LoginPage },*/
      { title: 'Home', component: HelloIonicPage },
      { title: 'Weight Machines', component: ListPage },
      { title: 'Custom Weights', component: CustomExercisePage },
    /*  { title: 'Client List', component: ClientListPage }, // Only if they are a trainer*/
      { title: 'Settings', component: SettingsPage},
      { title: 'About', component: AboutPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     // StatusBar.styleDefault();
      //Splashscreen.hide();
    });
  }

  openPage(page) {
    
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
