import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-standings-panel',
  templateUrl: './standings-panel.component.html',
  styleUrls: ['./standings-panel.component.less']
})
export class StandingsPanelComponent {
  teams: any[] = [];
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('assets/teams/standings_2025.json').subscribe((teams: any) => {
      this.teams = teams;
    });
  }
}
