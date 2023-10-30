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
      title: '10/29 - Dianes Dominators',
      description: 'Dianes Dipsticks dipsy-doodle around Black Sheep, win 6-1',
      image: 'assets/images/dianes_beat_sheep.png'
    },    
    {
      title: '10/29 - Hobbs To It',
      description: 'Hobbs leads Pineapples to victory over Jewelers, 5-1',
      image: 'assets/images/orcutt_vs_mansours_10-29-2023.png',
      link: 'https://www.youtube.com/watch?v=9ynkFlyZkOA'
    },    
    {
      title: '10/25 - Sheep Shot!',
      description: 'Black Sheep baaaaattle their way to victory over Outlaws with 6-3 win',
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
    }
  ]
}
