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
      title: '12/11 - Instant Replay Sports Surging',
      description: 'Orcutt Pineapples fall to Instant Replay, lose 2-6',
      image: 'assets/images/instant-replay.png'
    },
    {
      title: '12/11 - Holiday Hero',
      description: 'E.Net has busy weekend, scores twice in two games',
      image: 'assets/images/who_is_e_net.png'
    },
    {
      title: '12/10 - CRC Outlaws Win 4-1',
      description: 'Outlaws putting together decent streak, going 3-0-1 in their last four',
      image: 'assets/images/outlaws.png'
    },
    {
      title: '12/10 - Orcutt Pineapples 6, Mansours 3',
      description: 'Pineapples declare victory over Mansours',
      image: 'assets/images/orcutt_real_estate.png'
    },
    {
      title: '12/10 - Black Sheep Shine',
      description: 'Black Sheep sharp in 5-2 victory over Dianes Dipsticks',
      image: 'assets/images/blacksheep_face.png'
    }
  ]
}
