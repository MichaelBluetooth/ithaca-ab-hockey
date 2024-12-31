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
      title: "12/18 - Ice Cream Bar melted by Dianes",
      description: "Dianes secure one more win before heading into break, win 4-3",
      image: "assets/images/dianes_vs_icecreambar_12-18-2024.png",
      link: "https://www.youtube.com/watch?v=7rTmX2Jk1pk"
    },
    {
      title: "12/16 - Orcutt Overcome Sheep",
      description: "Orcutt Real Estate head into winter break on a 4 game winning streak, win 6-4",
      image: "assets/images/orcutt_vs_blacksheep_12-16-2024.png",
      link: "https://www.youtube.com/watch?v=iisGvpu-pcE"
    },
    {
      title: "12/15 - Dianes Dominance Continues",
      description: "Dianes defeat Mansour Jewelers 7-4",
      image: "assets/images/mansour_vs_dianes_12-15-2024.png",
      link: "https://www.youtube.com/watch?v=pj3FPRtMH18"
    },
    {
      title: "12/15 - Ice Cream Bar Sheer Sheep",
      description: "Ice Cream Bar defeat Black Sheep 5-4",
      image: "assets/images/blacksheep_vs_icecreambar_12-15-2024.jpg",
      link: "https://www.youtube.com/watch?v=3rq-c_Xdvag"
    },
    {
      title: "12/15 - Orcutt Hold On",
      description: "Orcutt Real Estate narrowly defeat Black Sheep, win 3-2",
      image: "assets/images/blacksheep_vs_orcutt_1-14-2024.png",
      link: ""
    }
  ]
}
