import { Pipe, PipeTransform } from '@angular/core';
import { ScheduledGame } from '../../../schedule/models/scheduled-game';

@Pipe({
  name: 'goalieName',
})
export class GoalieNamePipe implements PipeTransform {
  transform(name: string): string {
    return name || "TBD";
  }
}