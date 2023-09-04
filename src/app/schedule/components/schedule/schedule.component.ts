import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent {
  teams = [];
  schedule = [];

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  ngOnInit() {
    forkJoin([
      this.http.get('assets/teams/standings.json'),
      this.http.get('assets/teams/schedule.json')
    ]).subscribe((resp: any) => {
      this.teams = resp[0];
      this.schedule = resp[1];
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const today = this.datePipe.transform(new Date(), 'fullDate') || '';
      const yOffset = -10;
      const element: HTMLElement | null = document.getElementById(today);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 250);
  }
}
