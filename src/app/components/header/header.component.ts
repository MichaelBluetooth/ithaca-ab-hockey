import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  lgDeviceBreakpointPX = 992;
  showMenu = false;

  ngOnInit(){
    if(window.innerWidth >= 992){
      this.showMenu = true;
    }
  }
}
