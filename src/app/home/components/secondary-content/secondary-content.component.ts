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
      title: "1/15 - Mansour Stay On Top",
      description: "Mansour overcome Dianes in close game, remain top dog, win 4-3",
      image: "assets/images/mansours.png",
      link: ""
    },
    {
      title: "1/13 - Hot Hot...Ice Cream?",
      description: "Ice Cream Bar win again, defeat Orcutt Real Estate 7-3",
      image: "assets/sponsors/ice_cream_bar.jpg",
      link: ""
    },
    {
      title: "1/12 - Orcutt Shear Sheep",
      description: "Orcutt Real Estate defeat Black Sheep 6-3",
      image: "assets/images/orcutt_vs_blacksheep_12-16-2024.png",
      link: ""
    },
    {
      title: "1/12 - I Scream for Ice Cream",
      description: "Ice Cream Bar defeat Dianes with late goal, win 3-2",
      image: "assets/images/dianes_vs_icecreambar_1-12-2025.png",
      link: "https://www.youtube.com/watch?v=2KC8sbN3vvU"
    },
    {
      title: "1/12 - Mansour Melt Ice Cream Bar",
      description: "Ice Cream Bar dealt loss by Mansour in first of back-to-back games, 5-3",
      image: "assets/images/mansour_vs_icecreambar_1-13-2025.jpg",
      link: "https://www.youtube.com/watch?v=qcUPa9RaSTY"
    }
  ]
}
