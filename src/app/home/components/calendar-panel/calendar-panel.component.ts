import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.less']
})
export class CalendarPanelComponent {
  upcoming: any[] = [];
  teams: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(){
    forkJoin([
      this.http.get<any[]>('assets/teams/schedule_2025.json'),
      this.http.get<any[]>('assets/teams/standings_2025.json')
    ]).subscribe((d) => {
      const nextGames = d[0].filter(c => new Date(c.date) > new Date()).slice(0, 5);
      this.teams = d[1];

      nextGames.forEach(game => {
        this.upcoming.push({
          date: game.date,
          teamA: game.teamA,
          teamALogo: this.teams.find(t => t.name === game.teamA).logo,
          teamB: game.teamB,
          teamBLogo: this.teams.find(t => t.name === game.teamB).logo,
        });
      });
    });    
  }
}
