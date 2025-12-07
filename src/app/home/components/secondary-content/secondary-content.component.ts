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
      title: "12/1 - MBAs melt Ice Cream Bar",
      description: "E. Net strikes again, as MBAs defeat Ice Cream Bar 7-4",
      image: "assets/images/instantreplay_vs_icecreambar_10.27.2024.PNG",
      link: ""
    },
    {
      title: "12/3 - MBAs win again",
      description: "Orcutt, still looking for a win decimated by MBAs 12-4",
      image: "assets/images/orcutt_vs_instantreplay_11-3-2024.png",
      link: ""
    }    
  ]
}
