import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors-panel',
  templateUrl: './sponsors-panel.component.html',
  styleUrls: ['./sponsors-panel.component.less']
})
export class SponsorsPanelComponent {
  sponsors: any = [];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('assets/sponsors/sponsors.json').subscribe((sponsors) => {
      this.sponsors = sponsors;
    });
  }
}
