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
      title: '10/30 - T-t-t-t-t-tie game!',
      description: 'Outlaws and Mansours Jewelers duke it out, end game with a tie 5-5',
      image: 'assets/images/mansours_vs_outlaws_10-30-2023.png',
      link: 'https://www.youtube.com/watch?v=Zrz6t59Njbk'
    },
    {
      title: '10/30 - Rich Ford Shuts The Door',
      description: 'Earns the shutout as Instant Replay beat Dianes Dipsticks 1-0',
      image: 'assets/images/instantreplay_vs_dipsticks_10-30-2023.png'
    },
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
    }
  ]
}
