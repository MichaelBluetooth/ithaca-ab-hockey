import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortStandings'
})
export class SortStandingsPipe implements PipeTransform {

  transform(teams: any[]): any[] {
    teams.sort((a, b) => {
      const ptsA = a.wins * 2 + a.ties;
      const ptsB = b.wins * 2 + b.ties;

      const goalsForA = a.goals_for;
      const goalsForB = b.goals_for;

      const goalsAgainstA = a.goals_against;
      const goalsAgainstB = b.goals_against;

      if (ptsA !== ptsB) {
        return ptsA > ptsB ? -1 : 1;
      } else if (goalsForA !== goalsForB) {
        return goalsForA > goalsForB ? -1 : 1;
      } else if (goalsAgainstA !== goalsAgainstB) {
        return goalsAgainstB > goalsAgainstB ? -1 : 1;
      }else {
        //idk what the tie breaker would be here...flip a coin!?
        return 0;
      }
    });

    return teams;
  }

}
