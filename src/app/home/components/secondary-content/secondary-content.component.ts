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
      title: "Dianes Dipsticks take on MBAs",
      description: "#1 seed Dianes Dipsticks take on MBAs in semi-finals",
      image: "/assets/images/dianes_vs_mansours_12-18-2023.png",
      link: ""
    },
    {
      title: "Mansour Jewelers look to crush ICB",
      description: "#2 seed Mansour Jewelers take on ICB in semi-finals",
      image: "/assets/images/mansour_vs_icecreambar_1-13-2025.jpg",
      link: ""
    },
    {
      title: "Orcutt Eliminated",
      description: "Ice Cream Bar eliminates Orcutt Real Estate",
      image: "/assets/images/2025-2026/Orcutt_vs_ICB.PNG",
      link: "https://www.youtube.com/watch?v=Ip039c3nS80"
    },
    {
      title: "DSP Eliminated",
      description: "DSP Shows takes it to overtime, but MBAs come out on top",
      image: "/assets/images/dianes_vs_blacksheep_1-7-2024.png",
      link: ""
    }
  ]
}
