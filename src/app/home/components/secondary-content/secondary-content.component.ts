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
      title: '11/19 - MBAs taught a lesson by Mansours',
      description: 'Mansours Jewelers open the week by defeating CRC Outlaws 6-2',
      image: 'assets/images/mansour_vs_mbas.png',
    },
    {
      title: '11/19 - Black Sheep fall to Orcutts',
      description: 'Late flurry by Black sheep not enough to overcome early deficit, lose 5-3',
      image: 'assets/images/orcutt_vs_blacksheep.png',
    },
    {
      title: '11/15 - Dianes Dipsticks Dominate',
      description: 'Dianes Dipsticks defeat CRC Outlaws in decisive 7-2 victory',
      image: 'assets/images/dianes_vs_outlaws_11-15-2023.png',
      link: 'https://www.youtube.com/watch?v=5HXekHBaSx4'
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
  ]
}
