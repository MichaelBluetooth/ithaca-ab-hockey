import { Pipe, PipeTransform } from '@angular/core';
import { PtsPerGamePipe } from '../pts-per-game/pts-per-game.pipe';

@Pipe({
  name: 'sortStandings'
})
export class SortStandingsPipe implements PipeTransform {

  constructor(private ptsPerGameCalculator: PtsPerGamePipe){}

  transform(teams: any[]): any[] {
    teams.sort((a, b) => {
      const ptsA = a.wins * 2 + a.ties;
      const ptsB = b.wins * 2 + b.ties;

      const goalsForA = a.goals_for;
      const goalsForB = b.goals_for;

      const goalsAgainstA = a.goals_against;
      const goalsAgainstB = b.goals_against;

      const gamesPlayedA = a.wins + a.losses + a.ties;
      const gamesPlayedB = b.wins + b.losses + b.ties;

      const ptsPerGameA = this.ptsPerGameCalculator.transform(a);
      const ptsPerGameB = this.ptsPerGameCalculator.transform(b);

      if(ptsPerGameA !== ptsPerGameB){
        return ptsPerGameA > ptsPerGameB ? -1 : 1;
      } else if (ptsA !== ptsB) {
        return ptsA > ptsB ? -1 : 1;
      } else if (gamesPlayedA !== gamesPlayedB) {
        return gamesPlayedA > gamesPlayedB ? 1 : -1;
      } else if (goalsForA !== goalsForB) {
        return goalsForA > goalsForB ? -1 : 1;
      } else if (goalsAgainstA !== goalsAgainstB) {
        return goalsAgainstB > goalsAgainstB ? -1 : 1;
      } else {
        //idk what the tie breaker would be here...flip a coin!?
        return 0;
      }
    });

    return teams;
  }

}
