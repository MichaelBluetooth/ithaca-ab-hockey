import { Component } from '@angular/core';

@Component({
  selector: 'app-stat-leaders',
  templateUrl: './stat-leaders.component.html',
  styleUrls: ['./stat-leaders.component.less']
})
export class StatLeadersComponent {
  goalieLeader = {
    name: 'Joey Placeholder',
    img: 'assets/images/person-placeholder.jpg',
    wins: 5,
    losses: 2,
    ties: 0,
    shotsAgainst: 102,
    goalsAgainst: 20
  }

  skaterLeader = {
    name: "Louis Lapérson",
    img: 'assets/images/person-placeholder.jpg',
    points: 30
  }

  names = [
    "Rolph Josepha",
    "Clifton Gaby",
    "Marva Treasure",
    "Terrell Rodolph",
    "Paulette Ronnie",
    "Zachariah Bronwyn",
    "Regina Kevin",
    "Edna Mysie",
    "Percy Norman",
    "Colin Dick",
  ];

  goalies = [
    "Kandace Hubert",
    "Hugh Denholm",
    "Johnson Silvester",
    "Rilla Marvyn",
    "Fraser Frank",
    "Frank Sparrow"
  ]

  skaterStats = [...Array(10)].map((_, i) => {
    const goals = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    const assists = Math.floor(Math.random() * (29 - 0 + 1) + 0);
    return {
      name: this.names[i],
      goals: goals,
      assists: assists,
      points: goals + assists
    }
  });

  goalieStats = [...Array(6)].map((_, i) => {
    const gp = 10;
    const wins = Math.floor(Math.random() * (9 - 0 + 1) + 0);    
    const ties = Math.floor(Math.random() * (2 - 0 + 1) + 0);    
    const shutouts = Math.floor(Math.random() * (1 - 0 + 1) + 0);    
    return {
      name: this.goalies[i],
      wins: wins + shutouts,
      losses: gp - (wins + shutouts),
      shutouts: shutouts
    }
  });
}
