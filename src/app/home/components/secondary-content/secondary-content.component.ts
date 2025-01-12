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
      title: "1/8 - Masour defeat Sheep",
      description: "Mansour Jewelers hold on, narrowly defeat Black Sheep 5-4",
      image: "assets/images/mansour_vs_blacksheep_11-20-2023.png",
      link: ""
    },
    {
      title: "1/6 - Orcutt Wins!",
      description: "Orcutt Real Estate deliver Dianes Dipsticks rare defeat, win 8-3",
      image: "assets/images/orcutt_vs_dianes_1-12-2025.png",
      link: "https://www.youtube.com/watch?v=hxTJsJWGcZk"
    },
    {
      title: "1/5 - Dianes and Sheep Evenly Matched",
      description: "Late goal by Dianes lead to tie game with Black Sheep, 4-4",
      image: "assets/images/dianes_vs_blacksheep_1-7-2024.png",
      link: ""
    },
    {
      title: "1/5 - Double Header Danger",
      description: "Mansour fall to Orcutt in their 2nd of a back-to-back game, 4-2",
      image: "assets/images/orcutt_vs_mansours_12-5-2024.png",
      link: "https://www.youtube.com/watch?v=lwf2SN_EBas"
    },
    {
      title: "1/5 - Mansour Wins!",
      description: "Mansour win first of their double-headers, defeat Ice Cream Bar 5-3",
      image: "assets/images/mansours.png",
      link: ""
    }
  ]
}
