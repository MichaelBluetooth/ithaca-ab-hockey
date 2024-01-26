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
      title: '1/24 - Instant Replay Defeat Mansour Jewelers',
      description: 'Goalies Dan Dorney and Rich Ford solid in low-scoring affair. Instant Replay win 3-1.',
      image: 'assets/images/instant-replay.png'
    },
    {
      title: '1/22 - Dianes D-d-d-d-dominate',
      description: 'Dianes play some hockey, play great, score 8. Orcutts were there too.',
      image: 'assets/images/dianes_vs_orcutt_1-22-2024.png',
      link: 'https://www.youtube.com/watch?v=NjMwfCAhUso'
    },
    {
      title: '1/22 - Black Sheep Showdown',
      description: 'Hobbs and Conroy both strong as Black Sheep edge Outlaws in 4-3 victory',
      image: 'assets/images/blacksheep_vs_outlaws_1-22-2024.png',
      link: 'https://www.youtube.com/watch?v=WEZ6fvQpEz8'
    },
    {
      title: '1/21 - E. Net leads Orcutt in 1-0 win',
      description: 'E. Net, projected league MVP, scores yet ANOTHER game winning goal',
      image: 'assets/images/who_is_e_net.png',
      borderedImage: true
    },
    {
      title: '1/21 - Black Sheep defeat Instant Replay',
      description: 'Goalie Alex Chang solid in 4-1 win',
      image: 'assets/images/blacksheep_face.png',
      link: ''
    },
    {
      title: '1/21 - Mansour 3, Dianes 2',
      description: 'Goaltender Evan Mielbrecht makes season debut with a win',
      image: 'assets/images/mansours.png',
      link: ''
    },
  ]
}
