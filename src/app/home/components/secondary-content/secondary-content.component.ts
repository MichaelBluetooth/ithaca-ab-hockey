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
      title: "12/11 - Masour Win!",
      description: "Mansour Jewelers overpower Black Sheep, win 6-3",
      image: "assets/images/mansour_vs_blacksheep_11-20-2023.png",
      link: ""
    },
    {
      title: "12/9 - Orcutt Hang On",
      description: "Orcutt Realestate hold off Ice Cream Bar, win 5-4",
      image: "assets/images/orcutt_vs_icecreambar_12-9-24.jpg",
      link: "https://www.youtube.com/watch?v=lO8VHNWcljU"
    },
    {
      title: "12/9 - Black Sheep Tie Dianes",
      description: "Dianes and Black Sheep evenly matched, tie game 4-4",
      image: "assets/images/dianes_vs_blacksheep_1-28-2024.png",
      link: ""
    },
    {
      title: "12/9 - Mansour Stay Hot",
      description: "Mansour Jewelers continue winning ways after holiday break, defeat Orcutt 5-2",
      image: "assets/images/mansour_vs_orcutt_1.png",
      link: ""
    }
  ]
}
