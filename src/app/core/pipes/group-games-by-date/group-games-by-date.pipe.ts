import { Pipe, PipeTransform } from '@angular/core';
import { ScheduledGame } from '../../../schedule/models/scheduled-game';

@Pipe({
  name: 'groupGamesByDay',
})
export class GroupGamesByDayPipe implements PipeTransform {
  transform(games: ScheduledGame[]): any[] {
    const gamesByDay: any = {};

    games.forEach((game) => {
      const date = new Date(game.date);
      const day = date.toDateString();

      if (!gamesByDay[day]) {
        gamesByDay[day] = [];
      }
      gamesByDay[day].push(game);
    });

    const days = Object.keys(gamesByDay);
    days.sort((a, b) => {
      const aDate = new Date(a);
      const bDate = new Date(b);
      return aDate.getTime() - bDate.getTime();
    });

    const grouped: any[] = [];
    days.forEach(day => {
      grouped.push({
        date: new Date(day),
        games: gamesByDay[day]
      });
    });

    return grouped;
  }
}