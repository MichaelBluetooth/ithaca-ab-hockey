import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamLogo',
})
export class TeamLogoPipe implements PipeTransform {
  transform(teamName: string, teams: any[]): string {
    const matched = teams.find((t) => {
      return t.name.toLowerCase() === teamName.toLowerCase();
    });
    return matched ? `assets/teams/${matched.logo}` : '';
  }
}