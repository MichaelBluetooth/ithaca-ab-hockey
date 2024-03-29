import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.less']
})
export class VideosListComponent {
  
  videoUrls = [ //Newest at the top!
    "https://www.youtube.com/embed/7G1HPsEtaZk",
    "https://www.youtube.com/embed/t8Yn6XVS4EE",
    "https://www.youtube.com/embed/P9t8eheOnIk",
    "https://www.youtube.com/embed/PktX9a2RLUk",
    "https://www.youtube.com/embed/yvi9ZiNG_Wo",
    "https://www.youtube.com/embed/h9OFj-iM1_o",
    "https://www.youtube.com/embed/7CcHwLIs0-c",
    "https://www.youtube.com/embed/PNmFA-Xifzs",
    "https://www.youtube.com/embed/lQNYXESJeEg",
    "https://www.youtube.com/embed/gvEHbiJsjo",
    "https://www.youtube.com/embed/jLRi5DPRMjw",
    "https://www.youtube.com/embed/JmynehchcSc",
    "https://www.youtube.com/embed/bRptS8FPqDc",
    "https://www.youtube.com/embed/NRtwarRwINo",
    "https://www.youtube.com/embed/4wtlBK1rTAA",
    "https://www.youtube.com/embed/6bs4opMax3E",
    "https://www.youtube.com/embed/mj9MrDUEcHw",
    "https://www.youtube.com/embed/5HXekHBaSx4",
    "https://www.youtube.com/embed/8HTW_K_mBrM",
    "https://www.youtube.com/embed/RSYlE-xiFX8",
    "https://www.youtube.com/embed/JXKuYm8LN1g",
    "https://www.youtube.com/embed/EjJbOjL_uvU",
    "https://www.youtube.com/embed/7IXa_gqAzrY",
    "https://www.youtube.com/embed/a9SR4djsdM4",
    "https://www.youtube.com/embed/Zrz6t59Njbk",
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
