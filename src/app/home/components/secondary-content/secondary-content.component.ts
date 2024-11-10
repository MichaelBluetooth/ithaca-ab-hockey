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
      title: "11/6 - Mansour Jewelers Score More",
      description: "Mansour Jewelers back to their winning ways, defeat Instant Replay 10-5",
      image: "assets/images/mansours.png",
      link: ""
    },
    {
      title: "11/4 - Dianes Dominate",
      description: "Dianes Dipsticks beat Ice Cream Bar in high scoring game, win 8-4",
      image: "assets/images/dianes_vs_icecreambar_11-4-2024.png",
      link: "https://www.youtube.com/watch?v=xr_KkT_IhfE"
    },
    {
      title: "11/3 - Ice Cream Bar ices Black Sheep",
      description: "Ice Cream Bar defeat Black Sheep, win 4-2",
      image: "assets/sponsors/ice_cream_bar.jpg",
      link: ""
    },
    {
      title: "11/3 - Dianes Dipsticks edge Mansour Jewelers",
      description: "Mansour Jewelers dealt first loss by Dianes Dipsticks, fall 3-4",
      image: "assets/images/dianes_vs_mansour_11-3-2024.PNG",
      link: "https://www.youtube.com/watch?v=ihcZq-shgJw"
    },
    {
      title: "11/3 - No Replays Please",
      description: "Instant Replay cruise by Orcutt Real Estate, win 7-3",
      image: "assets/images/orcutt_vs_instantreplay_11-3-2024.png",
      link: "https://www.youtube.com/watch?v=U_H8OD9ZPuo"
    }
  ]
}
