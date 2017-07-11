import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ExerciseLogPage } from '../pages/exercise-log/exercise-log';
import { ListPage } from '../pages/list/list';
import { LogWeightPage } from '../pages/log-weight/log-weight';
import { ClientListPage } from '../pages/client-list/client-list';

import '../../node_modules/chart.js/dist/Chart.bundle.min.js';
import { ChartsModule } from 'ng2-charts';
import { WeightRoomServiceProvider } from '../providers/weight-room-service/weight-room-service';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ExerciseLogPage,
    ListPage,
    LogWeightPage,
    ClientListPage
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
    LogWeightPage,
    ClientListPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    WeightRoomServiceProvider]
})
export class AppModule {}
