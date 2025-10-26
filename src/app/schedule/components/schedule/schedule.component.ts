import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent {
  teams: any[] = [];
  schedule: any[] = [];
  calendars: any[] = [];

  constructor(private http: HttpClient, private datePipe: DatePipe, private dataService: DataService) { }

  ngOnInit() {
    this.http.get('assets/teams/team_calendars.json').subscribe((calendars: any) => {
      this.calendars = this.chunk(calendars, 3);
    });

    const d = this.dataService.getData();
    this.schedule = d.schedule;
    this.teams = d.standings;    
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

  chunk(items: any[], size: number) {
    const chunked = [];

    let chunk: any[] = [];
    for (let i = 0; i < items.length; i++) {
      if (i > 0 && i % size === 0) {
        chunked.push(chunk);
        chunk = [items[i]];
      } else {
        chunk.push(items[i]);
      }
    }
    chunked.push(chunk);

    return chunked;
  }
}
