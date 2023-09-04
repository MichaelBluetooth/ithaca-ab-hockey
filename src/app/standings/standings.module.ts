import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StandingsRoutingModule } from './standings-routing.module';
import { StandingsComponent } from './standings/standings.component';


@NgModule({
  declarations: [
    StandingsComponent
  ],
  imports: [
    CommonModule,
    StandingsRoutingModule,
    HttpClientModule
  ]
})
export class StandingsModule { }
