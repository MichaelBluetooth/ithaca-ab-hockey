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
      title: "10/26 - Ice Cream Bar Melted by Diane Dipsticks",
      description: "Dianes Dipsticks continue win streak, defeat Ice Cream Bar 7-5",
      image: "assets/images/2025-2026/InstantReplay_vs_Dianes.png",
      link: ""
    },
    {
      title: "10/26 - Instant Replay Sports Edge DSP Shows",
      description: "Instant Replay Sports narrowly defeats DSP Shows, 4-3",
      image: "assets/images/2025-2026/InstantReplay_vs_DSP.png",
      link: ""
    },
    {
      title: "10/26 - Orcutt Can't Cut It",
      description: "Orcutt left still searching for first in in 2-10 loss to Mansour",
      image: "assets/images/2025-2026/Mansour_vs_Orcutt_2.png",
      link: ""
    },

    {
      title: "10/26 - E. Net Makes First Appearance",
      description: "ABHL scoring legend nets first goal of the season. ",
      image: "assets/images/who_is_e_net.png",
      link: "",
      borderedImage: true
    }
  ]
}
