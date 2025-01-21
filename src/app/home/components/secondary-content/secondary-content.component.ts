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
      title: "1/20 - Black Sheep Schooled by MBAs",
      description: "Fresh legged MBAs stay hot, defeat Black Sheep 12-3",
      image: "assets/images/blacksheep_vs_mbas.png",
      link: ""
    },
    {
      title: "1/19 - Dianes Defeat Mansour",
      description: "Dianes Dipsticks topple Mansour Jewelers, win 6-4",
      image: "assets/images/dianes_vs_mansour_11-3-2024.PNG",
      link: ""
    },
    {
      title: "1/19 - Black Sheep and Ice Cream Bar",
      description: "Black Sheep and Ice Cream Bar end game in a tie, 5-5",
      image: "assets/images/blacksheep_vs_icecreambar_12-15-2024.jpg",
      link: ""
    },
    {
      title: "1/19 - Orcutt Taught Lesson By MBAs",
      description: "MBAs, fresh from break, restart season strong, win 5-3",
      image: "assets/images/instantreplay_vs_orcutt_12-11-2023.png",
      link: ""
    }
  ]
}
