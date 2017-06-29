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
  activeCreateEvent: boolean = true;
  activeEventList: boolean;
  activeCreateSC: boolean;
  activeDeleteSC: boolean;
  activeCreateCU: boolean = true;
  activeCreateCategory: boolean;
  activeCategoryList: boolean;
  activeCUList: boolean;

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
        else if (event.url == '/createClientUser' || event.url == '/createCategory'
                || event.url == '/categoryList' || event.url == '/clientUserList'){
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

  clickCreateEvent(){
    this.activeCreateEvent = true;
    this.activeEventList = false;
    this.activeCreateSC = false;
    this.activeDeleteSC = false;
  }

  clickEventList(){
    this.activeCreateEvent = false;
    this.activeEventList = true;
    this.activeCreateSC = false;
    this.activeDeleteSC = false;
  }

  clickCreateSC(){
    this.activeCreateEvent = false;
    this.activeEventList = false;
    this.activeCreateSC = true;
    this.activeDeleteSC = false;
  }

  clickDeleteSC(){
    this.activeCreateEvent = false;
    this.activeEventList = false;
    this.activeCreateSC = false;
    this.activeDeleteSC = true;
  }

  clickCreateCU(){
    this.activeCreateCU = true;
    this.activeCreateCategory = false;
    this.activeCategoryList = false;
    this.activeCUList = false;
  }

  clickCreateCategory(){
    this.activeCreateCU = false;
    this.activeCreateCategory = true;
    this.activeCategoryList = false;
    this.activeCUList = false;
  }

  clickListCategory(){
    this.activeCreateCU = false;
    this.activeCreateCategory = false;
    this.activeCategoryList = true;
    this.activeCUList = false;
  }

  clickCUList(){
    this.activeCreateCU = false;
    this.activeCreateCategory = false;
    this.activeCategoryList = false;
    this.activeCUList = true;
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
        this.localStorage.set('id', null);
        this.router.navigate(['/login'])
      }
    }
  }
}
