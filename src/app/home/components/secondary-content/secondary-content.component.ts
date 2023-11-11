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
      title: '11/6 - Instant Replay Win Again',
      description: 'Instant Replay wins 3rd game in row, topple CRC Outlaws 5-3',
      image: 'assets/images/instantreplay_vs_outlaws_11-6-2023.png',
      link: 'https://www.youtube.com/watch?v=EjJbOjL_uvU'
    },
    {
      title: "11/6 - All's wool that ends wool",
      description: 'Black Sheep perform be-ew-tifully, defeat Pineapples 5-2',
      image: 'assets/images/blacksheep_vs_orcutt_11-6-2023.png',
    },
    {
      title: '11/5 - Goalie Duel!',
      description: 'Mansours and Dipsticks evenly matched, games ends in tie 1-1',
      image: 'assets/images/mansours_vs_dipsticks_11-5-2023.png',
    },
    {
      title: '11/5 - Instant Replay Shear Black Sheep',
      description: 'Instant Replay beat Black Sheep 4-2 late Sunday night',
      image: 'assets/images/instantreplay_vs_blacksheep_11-6-2023.png',
    },
    {
      title: '11/5 - Streaking Pineapples',
      description: 'Juiced Pineapples overcome CRC Outlaws rematch, win 7-3',
      image: 'assets/images/outlaws_vs_pineapples_11-5-2023.png',
    },    
  ]
}
