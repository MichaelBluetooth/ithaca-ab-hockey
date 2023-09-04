import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.less']
})
export class StandingsComponent {
  teams: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('assets/teams/standings.json').subscribe((teams: any) => {
      this.teams = teams;
    });
  }
}
