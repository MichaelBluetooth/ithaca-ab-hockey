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
      title: "10/21 - Dianes Dipsticks Dangle Orcutt",
      description: "Dianes Dipsticks defeat Orcutt Real Estate in back-and-forth game, win 6-5",
      image: "assets/images/dianes_vs_orcutt_10-24-2024.PNG",
      link: "https://www.youtube.com/watch?v=vGJJ34YSpKw"
    },
    {
      title: "10/20 - Mansour Jewelers Still Undefeated",
      description: "Mansour Jewelers remain undefeated in regulation, beat Dianes 5-4",
      image: "assets/images/mansours_vs_dipsticks_11-5-2023.png",
      link: ""
    },
    {
      title: "10/20 - Instant Replay Defeat Orcutt",
      description: "Instant Replay defeat Orcutt Real Estate in high scoring game, win 7-6",
      image: "assets/images/instantreplay_vs_orcutt_10-20-2024.png",
      link: "https://www.youtube.com/watch?v=Bil4KC8PVRE"
    },
    {
      title: "10/20 - Black Sheep Victorious",
      description: "Black Sheep defeat Ice Cream Bar as E.Net scores first of of the season, win 5-3",
      image: "assets/images/blacksheep_vs_icecreambar_10-20-2024.PNG",
      link: "https://www.youtube.com/watch?v=c647rYoeclY"
    }    
  ]
}
