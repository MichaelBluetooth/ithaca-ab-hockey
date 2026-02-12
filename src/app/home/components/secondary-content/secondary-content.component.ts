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
      title: "HIGH SCORE!?",
      description: "2/11 - Instant Replay tops Orcutt Real Estate in high scoring game, 12-19",
      image: "/assets/images/2025-2026/Orcutt_vs_InstantReplay.png",
      link: ""
    },
    {
      title: "Goalie Duel",
      description: "2/9 - DSP and Mansour tie 2-2 as goalies Hobbs and Pace refuse to lose",
      image: "/assets/images/2025-2026/Mansour_vs_DSP.png",
      link: "https://www.youtube.com/watch?v=mHquywQ-V_A"
    },
    {
      title: "MBAs School DSP",
      description: "2/4 - Instant Replay defeats DSP shows 8-4",
      image: "/assets/images/2025-2026/InstantReplay_vs_DSP.png",
      link: ""
    },
  ]
}
