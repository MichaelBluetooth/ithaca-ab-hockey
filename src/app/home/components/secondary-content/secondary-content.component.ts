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
      title: '10/25 - Sheep Shot!',
      description: 'Black Sheep baaaaatle their way to victory over Outlaws with 6-3 win',
      image: 'assets/images/blacksheep_explosion.png'
    },
    {
      title: '10/23 - Thomas "Conn Smythe" Conway',
      description: 'Conway records shut out as Orcutts overcome Dipsticks, 4-0',
      image: 'assets/images/orcutt_vs_dianes_10-23-2023.png'
    },
    {
      title: '10/23 - Even Steven',
      description: 'Mansours and Instant Replay record season first tie game, 4-4',
      image: 'assets/images/instantreplay_vs_mansours_10-23-2023.png',
      link: 'https://www.youtube.com/watch?v=yr_6vEwIAU0'
    },
    {
      title: '10/22 - Dipsticks Shine Brighter Than Jewelers',
      description: 'Dianes Dipsticks overcome Mansours Jewelers 6-2',
      image: 'assets/images/dianes_vs_mansours_10-22-2023.png',
      link: 'https://www.youtube.com/watch?v=NyDGtILYUq4'
    },
    {
      title: '10/22 - Black Sheep Win!',
      description: 'Pull the wool over Instant Replay, win 4-2',
      image: 'assets/images/blacksheep_vs_instantreplay_10-22-2023.png',
    },
    {
      title: '10/22 - Peak Pineapple',
      description: 'Orcutt Pineapples Squeeze Past MBAs, win 5-3.',
      image: 'assets/images/orcutt_real_estate.png',
    }
  ]
}
