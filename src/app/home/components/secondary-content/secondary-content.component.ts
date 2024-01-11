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
      title: '1/9 - Mansour Jewelers Remain HOT, win 9-3',
      description: 'Black Sheep fall to streaking Mansour Jewelers Wednesday night',
      image: 'assets/images/mansours.png',
      link: ''
    },
    {
      title: '1/8 - Dianes Dipsticks Hold On, win 4-3',
      description: 'Late flurry by Pineapples not enough to overcome strong play by Dipsticks',
      image: 'assets/images/orcutt_vs_dianes_1-11-2024.png',
      link: 'https://www.youtube.com/watch?v=4e9EnV35uLw'
    },
    {
      title: '1/7 - Black and Blue',
      description: 'Dianes Dipsticks defeat league leader Black Sheep 6-2',
      image: 'assets/images/dianes_vs_blacksheep_1-7-2024.png',
      link: 'https://www.youtube.com/watch?v=oj-bN7J05BA'
    },
    {
      title: '1/7 - Orcutt Pineapples Double Header, Part 2',
      description: 'Orcutt Pineapples, fresh off their first game of a double header fall to red hot Mansour Jewelers. Lose 6-1.',
      image: 'assets/images/dianes.png',
      link: ''
    },
    {
      title: '1/7 - Orcutt Pineapples Double Header, Part 1',
      description: 'Orcutt Pineapples win their first of a double header, defeat Instant Replay 3-2.',
      image: 'assets/images/orcutt_real_estate.png',
      link: ''
    }
  ]
}
