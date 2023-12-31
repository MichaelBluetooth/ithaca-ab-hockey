import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StandingsRoutingModule } from './standings-routing.module';
import { StandingsComponent } from './components/standings/standings.component';
import { StatLeadersComponent } from './components/stat-leaders/stat-leaders.component';
import { SortByPipe } from './pipes/sort-by/sort-by.pipe';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    StandingsComponent,
    StatLeadersComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    StandingsRoutingModule,
    HttpClientModule,
    CoreModule
  ]
})
export class StandingsModule { }
