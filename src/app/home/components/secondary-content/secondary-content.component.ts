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
      title: "10/16 - Melted Ice Cream?!",
      description: "Orcutt Real Estate melt Ice Cream Bar, win 6-3",
      image: "assets/images/dianes_vs_orcutt_1-22-2024.png",
      link: ""
    },
    {
      title: "10/14 - Mansours Defeat Sheep",
      description: "Mansour Jewelers beat Black Sheep 8-2",
      image: "assets/images/mansour_vs_blacksheep_11-20-2023.png",
      link: ""
    },
    {
      title: "10/13 - Ice Cream Bar Stays Hot",
      description: "Ice Cream Bar defeat Dianes Dipsticks, 5-4",
      image: "assets/images/icb_mascot.jpg",
      link: ""
    },
    {
      title: "10/13 - Orc-can't Cut It",
      description: "Mansour Jewelers top Orcutt Real Estate 5-4",
      image: "assets/images/mansour_vs_orcutt_11-13-2024.png",
      link: "https://www.youtube.com/watch?v=YenAjctMB6k"
    },
    {
      title: "10/13 - Sheep and Orcutt Tie",
      description: "Orcutt Real Estate and Black Sheep evenly matched, 5-5",
      image: "assets/images/orcutt_vs_blacksheep_11-13-2024.png",
      link: "https://www.youtube.com/watch?v=YenAjctMB6k"
    }    
  ]
}
