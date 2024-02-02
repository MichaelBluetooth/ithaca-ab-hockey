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
      title: "1/31 - Pineapples Squeeze By Instant Replay",
      description: "Goalies Rich Ford and Dan Dorney strong, but Pineapples score late, win 4-3",
      image: "assets/images/orcutt_vs_instantreplay.png"
    },
    {
      title: "1/29 - Black Sheep Bounce Back",
      description: "Black Sheep and league leader E. Net defeat Mansour Jewelers 4-2",
      image: "assets/images/blacksheep_face.png"
    },
    {
      title: "1/29 - CRC Outlaws Down Dianes",
      description: "CRC Outlaws defense solid in 7-1 victory over Dianes Dipsticks",
      image: "assets/images/outlaws_vs_dianes_1-29-2024.png",
      link: 'https://www.youtube.com/watch?v=XGIJWt1AYdQ'
    },
    {
      title: "1/28 - Dianes Deliver Decisive Defeat",
      description: "Dianes defense solid in 6-1 victory over Black Sheep",
      image: "assets/images/dianes_vs_blacksheep_1-28-2024.png",
      link: "https://www.youtube.com/watch?v=fhy1Mo1jk9U"
    },
    {
      title: "1/28 - Instant Replay and CRC Outlaws Evenly Matched",
      description: "Goalies Alex Chang and Thomas Conroy both strong in 4-4 tie game",
      image: "assets/images/outlaws.png"
    },
    {
      title: "1/28 - Pineapples Pulverize Mansour",
      description: "Orcutt Pineapples score 8, defeat Mansour Jewelers",
      image: "assets/sponsors/orcutt_real_estate.jpg"
    },
  ]
}
