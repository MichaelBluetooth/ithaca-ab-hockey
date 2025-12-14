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
      title: "12/8 - Orcut Win Streak Over",
      description: "Orcutt, fresh off first win, fall to Ice Cream Bar, 2-6",
      image: "/assets/images/orcutt_vs_dianes_10-16-2023.png",
      link: ""
    },
    {
      title: "12/7 - Orcutt Streak Just Getting Started",
      description: "Orcutt secure first win of the season over DSP Shows, win 4-3",
      image: "assets/images/2025-2026/Orcutt_vs_DSP_12.14.2025.PNG",
      link: "https://www.youtube.com/watch?v=c5pFj4Nq7hw"
    },
    {
      title: "12/7 - Dianes Take The Lead",
      description: "Dianes Dipstick emerge at top contenders, defeat Mansour 7-4",
      image: "/assets/images/2025-2026/Mansour_vs_Dianes_12.7.2025.png",
      link: "https://www.youtube.com/watch?v=mqVHoCayFl0"
    },
    {
      title: "12/7 - MBAs melt Ice Cream Bar",
      description: "MBAs dominate game, win 12-0 against Ice Cream Bar",
      image: "assets/images/2025-2026/InstantReplay_vs_ICB.png",
      link: ""
    }    
  ]
}
