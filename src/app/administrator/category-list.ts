import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '',
  styleUrls: ['./category-list.scss'],
  templateUrl: './category-list.html'
})

export class CategoryListComponent {

  categories: Array<any> = [
    {
      name: 'Evento1',
    },
    {
      name: 'Evento2',
    },
    {
      name: 'Evento3',
    },
    {
      name: 'Evento4',
    }
  ]


  constructor(
    public router: Router
  ){
  }

}
