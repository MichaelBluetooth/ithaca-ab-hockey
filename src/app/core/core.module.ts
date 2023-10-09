import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortStandingsPipe } from './pipes/sort-standings/sort-standings.pipe';


@NgModule({
  declarations: [SortStandingsPipe],
  exports: [SortStandingsPipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
