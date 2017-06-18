import {Component, ViewEncapsulation} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/app.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  slide: boolean = false;
  activeProfile: boolean = true;
  activeCreateEvent: boolean;
  activeEventList: boolean;
  activeCreateSC: boolean;
  activeDeleteSC: boolean;

  constructor(
    router:Router
  ) {
      router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(event.url == '/login' || event.url == '/' || event.url == '/admin'){
          this.slide = false;
        }
        else{
          this.slide = true;
        }
      }
    });
  }

  clickProfile(){
    this.activeProfile = true;
    this.activeCreateEvent = false;
    this.activeEventList = false;
    this.activeCreateSC = false;
    this.activeDeleteSC = false;
  }

  clickCreateEvent(){
    this.activeProfile = false;
    this.activeCreateEvent = true;
    this.activeEventList = false;
    this.activeCreateSC = false;
    this.activeDeleteSC = false;
  }

  clickEventList(){
    this.activeProfile = false;
    this.activeCreateEvent = false;
    this.activeEventList = true;
    this.activeCreateSC = false;
    this.activeDeleteSC = false;
  }

  clickCreateSC(){
    this.activeProfile = false;
    this.activeCreateEvent = false;
    this.activeEventList = false;
    this.activeCreateSC = true;
    this.activeDeleteSC = false;
  }

  clickDeleteSC(){
    this.activeProfile = false;
    this.activeCreateEvent = false;
    this.activeEventList = false;
    this.activeCreateSC = false;
    this.activeDeleteSC = true;
  }


}
