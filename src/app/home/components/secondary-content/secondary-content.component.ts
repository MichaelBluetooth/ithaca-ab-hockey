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
      title: "11/20 - Dianes Disticks dupe Instant Replay",
      description: "Dianes Disticks defeat Instant Replay 9-3",
      image: "assets/images/dianes_vs_instant_replay_1-14-2024.png",
      link: ""
    },
    {
      title: "11/18 - Hobbs To It",
      description: "Goaltender Matt Hobbs leads Mansour Jewelers to victory with shutout, 5-0",
      image: "assets/images/blacksheep_vs_mansours_10-16-2023.png",
      link: ""
    },
    {
      title: "11/17 - Pineapples Victorious",
      description: "Orcutt Real Estate overcome Black Sheep in 8-4 win",
      image: "assets/images/orcutt_vs_blacksheep_11-13-2024.png",
      link: ""
    },
    {
      title: "11/17 - Instant Replay Edge Mansour",
      description: "Instant Replay narrowly defeat Mansour Jewelers in 6-5 victory",
      image: "assets/images/instantreplay_vs_mansour_11-17-2024.png",
      link: "https://www.youtube.com/watch?v=dMLw6fFlImc"
    },
    {
      title: "11/17 - Ice Cream Bar melted by Dianes",
      description: "Dianes Dipsticks claim top spot in victory over Ice Cream Bar, 6-2",
      image: "assets/images/dianes_vs_icecreambar_11-4-2024.png",
      link: ""
    }
  ]
}
