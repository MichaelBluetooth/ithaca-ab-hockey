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
      title: "1/27 - Dianes Score More",
      description: "Dianes Dipsticks defeat MBAs in high scoring match, 9-6",
      image: "assets/images/dianes_vs_instant_replay_10-16-2023.png",
      link: ""
    },
    {
      title: "1/26 - Black Sheep Fall to MBAs",
      description: "Black Sheep come up just short in high scoring match, lose to MBAs 8-9",
      image: "assets/images/blacksheep_vs_mbas_1-29-2025.png",
    },
    {
      title: "1/26 - Or-can't Cut It",
      description: "Dianes Dipsticks defeat Orcutt Real Estate 5-3",
      image: "assets/images/dianes_vs_orcutt_1-26-2025.JPG",
      link: "https://www.youtube.com/watch?v=K6kBgX5Etlw"
    },
    {
      title: "1/26 - Goalie Dual!",
      description: "Ice Cream Bar beat Mansour 2-1 as goalies Alton Pace and Cy McCrink refuse to let anyone score",
      image: "assets/images/blacksheep_vs_icecreambar_10-20-2024.PNG",
      link: ""
    },
    {
      title: "1/22 - Orcutt Real Estate Wins",
      description: "Orcut Real Estate beat Ice Cream Bar 9-6",
      image: "assets/images/orcutt_vs_icecreambar_12-9-24.jpg",
      link: ""
    }
  ]
}
