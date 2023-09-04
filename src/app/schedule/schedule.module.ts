import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupGamesByDayPipe } from './pipes/group-games-by-date.pipe';
import { TeamLogoPipe } from './pipes/team-logo.pipe';
import { IsTodayPipe } from './pipes/is-today.pipe';


@NgModule({
  declarations: [
    ScheduleComponent,
    GroupGamesByDayPipe,
    TeamLogoPipe,
    IsTodayPipe
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ]
})
export class ScheduleModule { }
