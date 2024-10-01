import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable()
@Pipe({
  name: 'ptsPerGame'
})
export class PtsPerGamePipe implements PipeTransform {

  transform(team: any): string {
    const gamesPlayed = team.wins + team.losses + team.ties;
    const totalPts = team.wins*2 + team.ties;

    const ret = (totalPts/gamesPlayed).toFixed(2);

    return ret === "NaN" ? "0" : ret;
  }
}
