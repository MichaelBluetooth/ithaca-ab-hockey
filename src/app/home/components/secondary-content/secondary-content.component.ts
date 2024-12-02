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
      title: "11/24 - Black Sheep Show",
      description: "Black Sheep secure victory over Ice Cream Bar, win 4-2",
      image: "assets/images/blacksheep_face.png",
      link: ""
    },
    {
      title: "11/24 - Dianes Dipsticks Dominate",
      description: "Dianes win both games in back-to-back matches against Orcutt and Mansour",
      image: "assets/images/dianes.png",
      link: ""
    },
    {
      title: "11/20 - Dipsticks vs. Instant Replay",
      description: "Dianes start busy weekend off with a 9-3 victory over Instant Replay",
      image: "assets/images/dianes_vs_instant_replay_1-14-2024.png",
      link: ""
    }    
  ]
}
