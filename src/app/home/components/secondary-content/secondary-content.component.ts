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
      title: "10/6 - Double Digit Dipsticks",
      description: "Dipsticks \"double digit\" Dipsticks beat Sheep, win 10-2",
      image: "assets/images/dianes_vs_blacksheep_11-12-2023.png",
      link: ""
    },
    {
      title: "10/6 - Mansour soured by Orcutt",
      description: "Orcutt Real Estate defeat Mansour Jewelers 5-2",
      image: "assets/images/orcutt_mansours_preseason.png",
      link: ""
    },
    {
      title: "10/6 - Ice Cream Bar melt Instant Replay",
      description: "Instant Replay intimidated by new look, fall 4-8",
      image: "assets/images/icb_mascot.jpg",
      link: ""
    },
    {
      title: "10/7 - Mansour and ICB evenly matched",
      description: "Mansour Jewelers and Ice Cream Bar evenly matched in season first tie, 6-6",
      image: "assets/images/mansours.png",
      link: ""
    }
  ]
}
