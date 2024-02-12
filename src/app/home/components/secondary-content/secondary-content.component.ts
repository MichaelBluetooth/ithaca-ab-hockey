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
      title: "2/7 - Outlaws Can't Be Stopped",
      description: "League leaders Black Sheep can't stop red-hot CRC Outlaws, fall 3-8",
      image: "assets/images/outlaws.png"
    },
    {
      title: "2/5 - Instant Replay Wins",
      description: "In rare low-scoring event, Instant Replay overcome Dianes Dipsticks 2-1",
      image: "assets/images/instant-replay.png"
    },
    {
      title: "2/5 - Outlaws Remain Hot!",
      description: "CRC Outlaws sneak by Mansour Jewelers in 4-3 victory",
      image: "assets/images/outlaws_vs_mansour.png",
      link: "https://www.youtube.com/watch?v=1hwUx7HloVo"
    },
    {
      title: "2/4 - Mansours Down Dianes",
      description: "Mansour Jewelers defeat Dianes Dipsticks 5-2",
      image: 'assets/images/mansour_vs_dianes_2-4-2024.png',
      link: "https://www.youtube.com/watch?v=xbRiBbCg8lk"
    },
    {
      title: "2/4 - Orcutt Pineapples Taught a Lesson",
      description: "MBA Outlaws down Orcutt Pineapples, winning 4-2",
      image: "assets/sponsors/orcutt_real_estate.jpg"
    },
    {
      title: "2/4 - Black Sheep down Instant Replay",
      description: "Goalies Mielbrecht and Pace keep it close, but Black Sheep overcome Instant Replay 4-2",
      image: "assets/images/blacksheep_face.png"
    }
  ]
}