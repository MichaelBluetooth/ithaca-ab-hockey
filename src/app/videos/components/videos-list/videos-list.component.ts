import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.less']
})
export class VideosListComponent {
  
  videoUrls = [ //Newest at the top!
    "https://www.youtube.com/embed/9ynkFlyZkOA",
    "https://www.youtube.com/embed/yr_6vEwIAU0",
    "https://www.youtube.com/embed/uy6twlPX7yw",
    "https://www.youtube.com/embed/NyDGtILYUq4",
    "https://www.youtube.com/embed/E_ldWJjuRHY",
    "https://www.youtube.com/embed/KbiszOZ0geU",
    "https://www.youtube.com/embed/yq3AekUa5mQ",
    "https://www.youtube.com/embed/g3tFTx5pseU",
    "https://www.youtube.com/embed/sx-14ueDDHU",
    "https://www.youtube.com/embed/CYPNYEfMceg",    
  ];

  goodGoalVideos = [
    'https://youtube.com/clip/Ugkxud-X3mCTbu2MDj5M2MNysCtQ-C_Yhz2c?si=PrcmPU71mXPIe1rU'
  ];

  constructor(private domSanitizer: DomSanitizer) {}

  get headerUrl(){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoUrls[0]);
  }

  get rows() {
    const chunked = [];

    let chunk: any[] = [];
    for (let i = 1; i < this.videoUrls.length; i++) {
      if (i === 1 && i % 3 === 0) {
        chunked.push(chunk);
        chunk = [this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoUrls[i])];
      } else {
        chunk.push(this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoUrls[i]));
      }
    }
    chunked.push(chunk);

    return chunked;
  }
}
