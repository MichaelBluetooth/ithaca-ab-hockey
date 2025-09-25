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
      title: "ABHL Invites YOU",
      description: "Hockey is for lovers. ABHL Invites YOU to opening night!",
      image: "assets/images/special_invite.jpg",
      link: "https://www.youtube.com/watch?v=uF5WL11_1PU"
    },
    {
      title: "3/9 - MBAs win it all!",
      description: "MBAs defeat Mansour 6-2 in thrilling final. Possible dynasty in the making.",
      image: "assets/images/mansour_vs_mba_championship.JPG",
      link: "https://www.youtube.com/watch?v=Kch9mil9W2M"
    },
    {
      title: "3/5 - MBAs headed to finals",
      description: "MBAs win 4-1 against Dianes, headed to finals for possible repeat championship win",
      image: "assets/images/dianes_vs_instant_replay_1-14-2024.png",
      link: ""
    },
    {
      title: "3/3 - Mansour Advances",
      description: "Mansour overcome Orcutt in overtime, win 3-2",
      image: "assets/images/mansour_vs_orcutt_3-3-2025.JPG",
      link: "https://www.youtube.com/watch?v=5UA5WBOX1Ww"
    }    
  ]
}
