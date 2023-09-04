import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  lgDeviceBreakpointPX = 992;
  isMobile = false;
  showMenu = true;

  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.showMenu = false || !this.isMobile;
      document.body.classList.remove('stop-scrolling');
    });

    if (window.innerWidth <= 992) {
      this.isMobile = true;
      this.showMenu = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;

    if (this.showMenu) {
      document.body.classList.add('stop-scrolling');
    } else {
      document.body.classList.remove('stop-scrolling');
    }
  }
}
