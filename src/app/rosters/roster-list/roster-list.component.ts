import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roster-list',
  templateUrl: './roster-list.component.html',
  styleUrls: ['./roster-list.component.less']
})
export class RosterListComponent implements OnInit {
  teams: { team: string, roster: string[] }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/teams/rosters.json').subscribe((teams: any) => {
      this.teams = teams;
    });
  }
}
