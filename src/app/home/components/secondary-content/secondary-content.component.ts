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
      title: '11/20 - Jewelers Shine Bright',
      description: 'Mansour Jewelers on a 3 game win streak defeat Black Sheep 7-3',
      image: 'assets/images/mansour_vs_blacksheep_11-20-2023.png',
      link: 'https://www.youtube.com/watch?v=6bs4opMax3E'
    },
    {
      title: '11/20 - Instant Replay and Orcutt tie, 1-1',
      description: 'Goalies Dan Dorney and Matt Hobbs stop nearly everything, leading to tie game',
      image: 'assets/images/orcutt_vs_instantreplay_11-20-2023.png',
      link: 'https://www.youtube.com/watch?v=4wtlBK1rTAA'
    },
    {
      title: '11/19 - MBAs taught a lesson by Mansours',
      description: 'Mansours Jewelers open the week by defeating CRC Outlaws 6-2',
      image: 'assets/images/mansour_vs_mbas.png',
    },
    {
      title: '11/19 - Black Sheep fall to Orcutts',
      description: 'Late flurry by Black sheep not enough to overcome early deficit, lose 5-3',
      image: 'assets/images/blacksheep_vs_orcutt_11-19-2023.png',
      link: 'https://www.youtube.com/watch?v=mj9MrDUEcHw'
    },
    {
      title: '11/15 - Dianes Dipsticks Dominate',
      description: 'Dianes Dipsticks defeat CRC Outlaws in decisive 7-2 victory',
      image: 'assets/images/dianes_vs_outlaws_11-15-2023.png',
      link: 'https://www.youtube.com/watch?v=5HXekHBaSx4'
    }
  ]
}
