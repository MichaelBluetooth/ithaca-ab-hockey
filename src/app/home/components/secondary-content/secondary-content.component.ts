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
      title: "2/26 - Black Sheep Down",
      description: "Mansour defeat Black Sheep 7-1",
      image: "assets/images/blacksheep_vs_mansour_2-26-2025.png",
      link: "https://www.youtube.com/watch?v=eA8ZziVOOjc"
    },
    {
      title: "2/24 - MBA School Ice Cream Bar",
      description: "MBAs secure win over Ice Cream Bar, 7-4",
      image: "assets/images/instantreplay_vs_icecreambar_10.27.2024.PNG",
      link: ""
    },
    {
      title: "2/23 - Ice Cream Bar Beat Sheep",
      description: "Ice Cream Bar narrowly defeat sheep, 4-3",
      image: "assets/images/blacksheep_vs_icecreambar_10-20-2024.PNG",
      link: ""
    },
    {
      title: "2/23 - Orcutts Falters Against Dianes",
      description: "Orcutt loses to Dianes in possible round 2 matchup, 2-4",
      image: "assets/images/dianes_vs_orcutt_1-26-2025.JPG",
      link: ""
    },
    {
      title: "2/19 - Dianes Beat MBAs",
      description: "Dianes win by one, beat MBAs 5-4",
      image: "assets/images/dianes_vs_instant_replay_1-14-2024.png",
      link: ""
    }
  ]
}
