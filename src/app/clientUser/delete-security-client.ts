import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '',
  styleUrls: ['./delete-security-client.scss'],
  templateUrl: './delete-security-client.html'
})

export class DeleteSecurityClientComponent {

  securities: Array<any> = [
    {
      email: 'Evento1'
    },
    {
      email: 'Evento2',
    },
    {
      email: 'Evento3',
    },
    {
      email: 'Evento4',
    }
  ]

  constructor(
    public router: Router
  ){
  }

}
