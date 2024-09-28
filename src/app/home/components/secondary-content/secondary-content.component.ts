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
      title: "Intoducing ICE CREAM BAR",
      description: "Please welcome the newest sponsor in our leage: Ice Cream Bar",
      image: "assets/images/icb_mascot.jpg",
      link: "https://icbtburg.com/"
    },
    {
      title: "Outlaws 2024 Champs",
      description: "Congratulations to the MBA team and goaltender Rich Ford!",
      image: "assets/images/2024_champs.png",
      link: "https://www.youtube.com/watch?v=u8vVIxWCWNc"
    },
    {
      title: "2023 Season CRC Plays of the Year",
      description: "Check out the best plays from the 2023 season right here!",
      image: "assets/images/lfg_presents_2023.png",
      link: "https://www.youtube.com/watch?v=3a6thDIr3Es"
    }
  ]
}