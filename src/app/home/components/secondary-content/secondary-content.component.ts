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
      title: "10/16 - Orcutt Can't Solve Mansour",
      description: "Orcutt Real Estate improve, but still can't defeat Mansour Jewelers. Fall 6-3",
      image: "assets/images/2025-2026/Mansour_vs_Orcutt_2.png",
      link: ""
    },
    {
      title: "10/13 - Ice Cream Bar Ices DSP Shows",
      description: "Ice Cream Bar secures first win against DSP Shows, win 7-1",
      image: "assets/images/2025-2026/ICV_vs_DSP.png",
      link: ""
    },
    {
      title: "10/12 - Dianes Dipsticks defeat Ice Cream Bar",
      description: "Dianes continue win streak, win 8-5",
      image: "assets/images/2025-2026/ICB_vs_Dianes.png",
      link: ""
    },
    {
      title: "10/12 - Mansour Jewelers Manhandle Orcutt Real Estate",
      description: "New kits proove effective, win decisively 11-2",
      image: "assets/images/2025-2026/Mansour_vs_Orcutt.png",
      link: ""
    },
    {
      title: "10/12 - DSP Shows get first win over Orcutt Real Estate",
      description: "Orcutt kept it close, but DSP wins 5-4",
      image: "assets/images/2025-2026/Orcutt_vs_DSP.png",
      link: ""
    },
    {
      title: "10/8 - Dianes Deal Reigning Champs First Loss",
      description: "Dianes Dipsticks defeat MBAs 704",
      image: "assets/images/2025-2026/Dianes_vs_DSP.png",
      link: ""
    },    
  ]
}
