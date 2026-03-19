import { Component } from '@angular/core';

interface SecondaryContent {
  title: string;
  description: string;
  image: string;
  borderedImage?: boolean; //some images are mostly white and look nicer with a subtle border
  link?: string;
}

@Component({
  selector: 'app-secondary-content',
  templateUrl: './secondary-content.component.html',
  styleUrls: ['./secondary-content.component.less']
})
export class SecondaryContentComponent {

  sections: SecondaryContent[] = [
    {
      title: "Dianes Dipsticks DO IT",
      description: "DIANES DIPSTICKS TAKE THE CROWN, win 4-3",
      image: "/assets/images/2025-2026/Dianes_Win.PNG",
      link: ""
    },
    {
      title: "Mansour Jewelers fall just short",
      description: "Late goal leads to Mansour loss in finals",
      image: "/assets/images/2025-2026/Mansour_Loss.PNG",
      link: ""
    },
    {
      title: "Alton Pace Demonstrates",
      description: "Dianes goalie Alton Pace shows why he's the #1 goalie pick",
      image: "/assets/images/2025-2026/Pace_Wins.PNG",
      link: ""
    },
    {
      title: "William Block stands tall",
      description: "Mansour goaltender unfazed by Dianes Dipsticks",
      image: "/assets/images/2025-2026/WilliamBlock_Stands_Tall.PNG",
      link: ""
    }
  ]
}
