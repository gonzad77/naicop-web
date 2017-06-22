import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ClientUserService } from '../services/client-user-service';

@Component({
  selector: '',
  styleUrls: ['./client-user-list.scss'],
  templateUrl: './client-user-list.html'
})

export class ClientUserListComponent {

  clientUsers: Array<any>;

  constructor(
    public router: Router,
    public clientUserService: ClientUserService
  ){
  }

  ngOnInit(){
    this.getClientUsers();
  }

  getClientUsers(){
    this.clientUserService.getClientUsers()
    .then( res => console.log(res))
  }

  deleteClientUser(clientUserId){
    this.clientUserService.deleteClientUser(clientUserId)
    .then( res => this.getClientUsers())
  }
}
