import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/app.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  adminSlide: boolean = false;
  clientUserSlide: boolean = false
  activeProfile: boolean = true;
  activeCreateEvent: boolean;
  activeEventList: boolean;
  activeCreateSC: boolean;
  activeDeleteSC: boolean;
  activeCreateCU: boolean;
  activeCreateCategory: boolean;

  constructor(
    public router: Router,
    public localStorage: LocalStorageService
  ) {
      router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(event.url == '/login' || event.url == '/' || event.url == '/admin'){
          this.adminSlide = false;
          this.clientUserSlide = false;
        }
        else if (event.url == '/createClientUser' || event.url == '/createCategory'){
          this.adminSlide = true;
          this.clientUserSlide = false;
        }
        else{
          this.adminSlide = false;
          this.clientUserSlide = true;
        }
      }
    });
  }

  ngOnInit(){

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

  clickCreateCU(){
    this.activeCreateCU = true;
    this.activeCreateCategory = false;
  }

  clickCreateCategory(){
    this.activeCreateCU = false;
    this.activeCreateCategory = true;
  }

  logout(){
    let rol = this.localStorage.get('rol');
    if(rol){
      if( rol == 'admin'){
        this.localStorage.set('rol', null);
        this.router.navigate(['/admin']);
      }
      else{
        this.localStorage.set('rol', null);
        this.router.navigate(['/login'])
      }
    }
  }
}
