import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.less']
})
export class SponsorsComponent {
  sponsors: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/sponsors/sponsors.json').subscribe((sponsors: any) => {
      this.sponsors = sponsors;
    });
  }
}
