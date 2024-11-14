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
      title: "11/13 - Dianes Dipsticks Contenders?",
      description: "Dianes Dipsticks remain close to Mansours in standings, defeat Instant Replay 8-3",
      image: "assets/images/dianes_vs_instant_replay_1-14-2024.png",
      link: ""
    },
    {
      title: "11/11 - Instant Replay Defeat Sheep",
      description: "Instant Replay defeat struggling Black Sheep by like...a lot",
      image: "assets/images/blacksheep_vs_instantreplay_10-22-2023.png",
      link: ""
    },
    {
      title: "11/10 - Mansour and Instant Replay tie",
      description: "Mansour Jewelers and Instant Replay evenly matched in 4-4 tie",
      image: "assets/images/mansour_vs_mbas.png",
      link: ""
    },
    {
      title: "11/10 - Orcutt Edges Ice Cream Bar",
      description: "Orcutt Real Estate get early lead, manage to hold off Ice Cream Bar in 5-4 win",
      image: "assets/images/orcutt_vs_dianes_10-23-2023.png",
      link: ""
    },
    {
      title: "11/10 - Dianes Remain Hot",
      description: "Dianes Dipsticks remain hot, defeat Black Sheep 10-4",
      image: "assets/images/dianes_vs_blacksheep_1-7-2024.png",
      link: ""
    }
  ]
}
