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
      title: '12/20 - Dianes Defeat Instant Replay',
      description: 'Goalie Rich Ford remains hot, helps Dipsticks defeat Instant Replay 6-3',
      image: 'assets/images/dianes.png',
      link: ''
    },
    {
      title: '12/18 - Jewelers Down Dianes Dipsticks',
      description: 'Mansour Jewelers remain hot, defeat Dianes Dipsticks 3-2',
      image: 'assets/images/dianes_vs_mansours_12-18-2023.png',
      link: 'https://www.youtube.com/watch?v=P9t8eheOnIk'
    },
    {
      title: '12/18 - Black Sheep Streak',
      description: 'Pineapples fall to streaking Black Sheep in Monday night rematch - lose 4-6',
      image: 'assets/images/blacksheep_vs_orcutt_12-18-2023.png',
      link: 'https://www.youtube.com/watch?v=PktX9a2RLUk'
    },
    {
      title: '12/17 - Back in Black (Sheep)',
      description: 'Black Sheep double down on their double header victories, defeat Orcutt Pineapples 6-4',
      image: 'assets/images/blacksheep_vs_orcutt_12-17-2023.png',
      link: 'https://www.youtube.com/watch?v=yvi9ZiNG_Wo'
    },
    {
      title: '12/17 - E. Net: league hero',
      description: 'E. Net comes up big for Sheep, scored lone goal in in 1-0 win against CRC Outlaws',
      image: 'assets/images/who_is_e_net.png',
      link: '',
      borderedImage: true
    },
    {
      title: '12/17 - Jewelers Jump Ahead',
      description: 'Dipsticks fall to Mansour Jewelers, 2-5',
      image: 'assets/images/mansours.png',
      link: ''
    },
    {
      title: '12/13 - Black Sheep Sharp',
      description: 'Black Sheep defeat Mansour Jewelers 5-3',
      image: 'assets/images/blacksheep_face.png',
      link: ''
    }
  ]
}
