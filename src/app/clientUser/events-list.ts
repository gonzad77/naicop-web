import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event-service';


@Component({
  selector: '',
  styleUrls: ['./events-list.scss'],
  templateUrl: './events-list.html'
})

export class EventsListComponent {

  events: Array<any>


  constructor(
    public router: Router,
    public eventService: EventService
  ){}

  ngOnInit(){
    this.getEvents();
  }

  getEvents(){
    this.eventService.getEvents()
    .then( res => this.events = res.json())
  }

  deleteEvent(event){
    this.eventService.deleteEvent(event)
    .then( res => {
      this.getEvents()
    }, err => alert('Error at delete'))
  }
}
