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
      title: '11/15 - Dianes Dipsticks Dominate',
      description: 'Dianes Dipsticks defeat CRC Outlaws in decisive 7-2 victory',
      image: 'assets/images/dianes.png'
    },
    {
      title: '11/13 - Mansours Manhandle Orcutt',
      description: 'Mansours Jewelers defeat Orcutt Pineapple 6-2 in SPICY match',
      image: 'assets/images/mansours.png'
    },
    {
      title: '11/13 - E. Net Nets Game Winner',
      description: 'Black Sheep get the win over CRC Outlaws thanks to heroics of E. Net, win 1-0',
      image: 'assets/images/who_is_e_net.png',
      borderedImage: true
    },
    {
      title: '11/12 - Bah-Bye Black Sheep',
      description: 'Dianes Dipsticks beat Black Sheep in close game, win 4-3',
      image: 'assets/images/dianes_vs_blacksheep_11-12-2023.png',
      link: 'https://www.youtube.com/watch?v=8HTW_K_mBrM'
    },
    {
      title: '11/12 - Instant Streak-play',
      description: 'Instant Replay keeps the streak alive, defeat Outlaws 9-2 ',
      image: 'assets/images/instantreplay_vs_outlaws_11-12-2023.png',
      link: 'https://www.youtube.com/watch?v=RSYlE-xiFX8'
    },
    {
      title: '11/12 - Outlaws Outplay Mansours',
      description: 'CRC Outlaws defeat Mansours Jewelers in their weekend double-up, 5-3 ',
      image: 'assets/images/outlaws.png'
    }
  ]
}
