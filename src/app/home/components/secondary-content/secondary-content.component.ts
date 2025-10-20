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
      title: "10/20 - Ice Cream Bar Freezes Out DSP Shows",
      description: "Ice Cream Bar confident in 8-3 victory, keep DSP Shows on ice from start to finish.",
      image: "assets/images/2025-2026/ICB_vs_DSP.png",
      link: ""
    },
    {
      title: "10/20 - Orcutts Win Drought Still Frozen After 7-8 Loss",
      description: "Instant Replay defeat winless Orcutt Real Estate in high scoring affair",
      image: "assets/images/2025-2026/Orcutt_vs_InstantReplay.png",
      link: ""
    },    
    {
      title: "10/20 - Diane's Dipsticks Stay Polished in 8-5 Win",
      description: "The undefeated Dipsticks kept their shine, handing Mansour Jewelers their first loss of the season in a hard-fought 8-5 matchup.",
      image: "assets/images/2025-2026/Mansour_vs_Dianes.png",
      link: ""
    },
  ]
}
