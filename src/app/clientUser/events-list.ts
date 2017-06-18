import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '',
  styleUrls: ['./events-list.scss'],
  templateUrl: './events-list.html'
})

export class EventsListComponent {

  events: Array<any> = [
    {
      name: 'Evento1',
      date: '22/04/2012'
    },
    {
      name: 'Evento2',
      date: '22/04/2013'
    },
    {
      name: 'Evento3',
      date: '22/04/2014'
    },
    {
      name: 'Evento4',
      date: '22/04/2015'
    }
  ]


  constructor(
    public router: Router
  ){
  }

}
