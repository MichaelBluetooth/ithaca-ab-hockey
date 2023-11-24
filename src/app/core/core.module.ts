import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortStandingsPipe } from './pipes/sort-standings/sort-standings.pipe';
import { PtsPerGamePipe } from './pipes/pts-per-game/pts-per-game.pipe';


@NgModule({
  declarations: [SortStandingsPipe, PtsPerGamePipe],
  exports: [SortStandingsPipe, PtsPerGamePipe],
  providers: [PtsPerGamePipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
