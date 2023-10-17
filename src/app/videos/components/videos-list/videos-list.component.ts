import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.less']
})
export class VideosListComponent {
  
  videoUrls = [ //Newest at the top!
    "https://www.youtube.com/embed/KbiszOZ0geU",
    "https://www.youtube.com/embed/yq3AekUa5mQ",
    "https://www.youtube.com/embed/g3tFTx5pseU",
    "https://www.youtube.com/embed/sx-14ueDDHU",
    "https://www.youtube.com/embed/CYPNYEfMceg",    
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
