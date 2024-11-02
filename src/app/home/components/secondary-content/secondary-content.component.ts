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
      title: "10/30 - Mansour Jewelers ON FIRE",
      description: "Top Dog Mansour Jewelers beat Instant Replay, 5-2",
      image: "assets/images/instantreplay_vs_mansours_10-23-2023.png",
      link: ""
    },
    {
      title: "10/27 - Repeat Victory?",
      description: "Mansour Jewelers win 6-2 again, defeat Black Sheep",
      image: "assets/images/instantreplay_vs_icecreambar_10.27.2024.PNG",
      link: ""
    },
    {
      title: "10/27 - Instant Replay Win",
      description: "Instant Replay edge Ice Cream Bar in 5-4 win",
      image: "assets/images/instantreplay_vs_icecreambar_10.27.2024.PNG",
      link: "https://www.youtube.com/watch?v=G0Y2GgsSwsI"
    },
    {
      title: "10/27 - Dianes Danglers",
      description: "Dianes Dipsticks beat Black Sheep, 8-4",
      image: "assets/images/dianes_vs_blacksheep_10.27.2024.PNG",
      link: "https://www.youtube.com/watch?v=Voxs9G1ly9o"
    },
    {
      title: "10/27 - Mansour Jewelers Stay Hot",
      description: "Mansour Jewelers remain undefeated in regulation, defeat Orcutt Real Estate 6-2",
      image: "assets/images/mansour_vs_orcutt_1.png",
      link: ""
    }   
  ]
}
