import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RostersRoutingModule } from './rosters-routing.module';
import { RosterListComponent } from './roster-list/roster-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RosterListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RostersRoutingModule
  ]
})
export class RostersModule { }
