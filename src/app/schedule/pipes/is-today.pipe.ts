import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isToday'
})
export class IsTodayPipe implements PipeTransform {

  today = new Date().toDateString();

  transform(value: Date): boolean {
    return value.toDateString() === this.today;
  }

}