import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.less']
})
export class StandingsComponent {
  teams: any[] = [];

  constructor(private data: DataService){}

  ngOnInit(){
    this.teams = this.data.getData().standings;
  }
}
