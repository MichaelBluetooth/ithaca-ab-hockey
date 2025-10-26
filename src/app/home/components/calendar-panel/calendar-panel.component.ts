import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.less']
})
export class CalendarPanelComponent {
  upcoming: any[] = [];
  teams: any[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    const d = this.data.getData();
    const nextGames = d.schedule.filter((c: any) => new Date(c.date) > new Date()).slice(0, 5);
    this.teams = d.standings;

    nextGames.forEach((game: any) => {
      this.upcoming.push({
        date: game.date,
        teamA: game.teamA,
        teamALogo: this.teams.find(t => t.name === game.teamA).logo,
        teamB: game.teamB,
        teamBLogo: this.teams.find(t => t.name === game.teamB).logo,
      });
    });
  }
}
