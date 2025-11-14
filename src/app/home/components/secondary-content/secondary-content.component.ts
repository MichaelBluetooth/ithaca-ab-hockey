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
      title: "11/12 - Dianes Score More",
      description: "Dianes Dipsticks out-score Instant Replay, win 11-6",
      image: "assets/images/2025-2026/InstantReplay_vs_Dianes.png",
      link: ""
    },
    {
      title: "11/10 - Mansour Keeps Scoring",
      description: "Mansour Jewelers victorious against DSP Shows, 9-3",
      image: "assets/images/2025-2026/Mansour_vs_DSP_1.png",
      link: ""
    },
    {
      title: "11/9 - Orcutt Stops The Bleeding",
      description: "Orcutt Real Estate stave off 9th straight loss, tie Instant Replay 6-6",
      image: "assets/images/2025-2026/Orcutt_vs_InstantReplay.png",
      link: ""
    },
    {
      title: "11/9 - Mansour Jewelers Melt ICB",
      description: "Mansour Jewelers defeat Ice Cream Bar, 5-2",
      image: "assets/images/2025-2026/ICB_vs_Mansour_1.PNG",
      link: "https://www.youtube.com/watch?v=YUL4ssHrUe0"
    },
    {
      title: "11/9 - Dianes Hold On",
      description: "Dianes Dipsticks hold off DSP Shows in high-scoring affair, win 10-9",
      image: "assets/images/2025-2026/Dianes_vs_DSP.png",
      link: ""
    }
  ]
}
