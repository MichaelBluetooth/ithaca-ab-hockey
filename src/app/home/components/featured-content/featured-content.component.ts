import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FEATURED_CONTENT } from 'src/app/featured-content';

@Component({
  selector: 'app-featured-content',
  templateUrl: './featured-content.component.html',
  styleUrls: ['./featured-content.component.less']
})
export class FeaturedContentComponent {
  videoUrl: SafeUrl;

  constructor(domSanitizer: DomSanitizer) {
    // this.videoUrl = domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CYPNYEfMceg?autoplay=0');
    this.videoUrl = domSanitizer.bypassSecurityTrustResourceUrl(FEATURED_CONTENT.video);
  }
}
