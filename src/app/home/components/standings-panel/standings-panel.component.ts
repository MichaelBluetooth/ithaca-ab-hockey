import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-standings-panel',
  templateUrl: './standings-panel.component.html',
  styleUrls: ['./standings-panel.component.less']
})
export class StandingsPanelComponent {
  teams: any[] = [];
  constructor(private data: DataService){}

  ngOnInit(){
    this.teams = this.data.getData().standings;
  }
}
