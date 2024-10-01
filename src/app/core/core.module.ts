import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortStandingsPipe } from './pipes/sort-standings/sort-standings.pipe';
import { PtsPerGamePipe } from './pipes/pts-per-game/pts-per-game.pipe';
import { GroupGamesByDayPipe } from './pipes/group-games-by-date/group-games-by-date.pipe';
import { TeamLogoPipe } from './pipes/team-logo/team-logo.pipe';


@NgModule({
  declarations: [SortStandingsPipe, PtsPerGamePipe, GroupGamesByDayPipe, TeamLogoPipe],
  exports: [SortStandingsPipe, PtsPerGamePipe, GroupGamesByDayPipe, TeamLogoPipe],
  providers: [PtsPerGamePipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
