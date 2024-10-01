import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HttpClientModule } from '@angular/common/http';
import { IsTodayPipe } from './pipes/is-today.pipe';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ScheduleComponent,
    IsTodayPipe
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    DatePipe
  ]
})
export class ScheduleModule { }
