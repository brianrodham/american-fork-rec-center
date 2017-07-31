import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ExerciseLogPage } from '../pages/exercise-log/exercise-log';
import { ListPage } from '../pages/list/list';
import { CustomExercisePage } from '../pages/custom-exercise/custom-exercise';
import { LogWeightPage } from '../pages/log-weight/log-weight';
import { ClientListPage } from '../pages/client-list/client-list';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register'


import '../../node_modules/chart.js/dist/Chart.bundle.min.js';
import { ChartsModule } from 'ng2-charts';
import { UserDataServiceProvider } from '../providers/user-data-service/user-data-service';
import { AuthService} from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ExerciseLogPage,
    ListPage,
    CustomExercisePage,
    LogWeightPage,
    ClientListPage,
    AboutPage,
    SettingsPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ExerciseLogPage,
    ListPage,
    CustomExercisePage,
    LogWeightPage,
    ClientListPage,
    AboutPage,
    SettingsPage,
    LoginPage,
    RegisterPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataServiceProvider,
    AuthService]
})
export class AppModule {}
