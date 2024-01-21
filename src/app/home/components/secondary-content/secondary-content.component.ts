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
      title: '1/17 - Black Sheep Finally Stop Mansours Streak',
      description: 'Black Sheep and Mansour Jewelers evenly matched, tie 2-2',
      image: 'assets/images/blacksheep_vs_mansour.png',
      link: ''
    },
    {
      title: '1/15 - E. Net scores again',
      description: 'E. Net, projected league MVP, scores yet another game winning goal',
      image: 'assets/images/who_is_e_net.png',
      link: ''
    },
    {
      title: '1/15 - Instant Replayed Routed by Pineapples',
      description: 'Instant Replay Falls to Orcutt Pineapples, lose 6-3',
      image: 'assets/images/instantreplay_vs_orcutt_1-15-2024.png',
      link: 'https://www.youtube.com/watch?v=GFrOHsggQ38'
    },
    {
      title: '1/14 - Pineapples Pulverize Sheep',
      description: 'Orcutt Pineapples defeat Black Sheep, 8-1',
      image: 'assets/images/blacksheep_vs_orcutt_1-14-2024.png',
      link: 'https://www.youtube.com/watch?v=bOLadGspOn8'
    },
    {
      title: '1/14 - Instant Replay: 7, Dianes: 4',
      description: 'Instant Replay go 1-1 in their double header weekend',
      image: 'assets/images/dianes_vs_instant_replay_1-14-2024.png',
      link: 'https://www.youtube.com/watch?v=B2O9ur3DahU'
    },
    {
      title: '1/14 - Red, White and Ice',
      description: 'Mansour Jewelers continue winning streak, defeat Instant Replay 4-2',
      image: 'assets/images/mansours.png',
      link: ''
    }
  ]
}
