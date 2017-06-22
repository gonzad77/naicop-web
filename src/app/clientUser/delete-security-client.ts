import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { SecurityClientService } from '../services/security-client-service';

@Component({
  selector: '',
  styleUrls: ['./delete-security-client.scss'],
  templateUrl: './delete-security-client.html'
})

export class DeleteSecurityClientComponent {


  clientId: number;
  securities: Array<any>;

  constructor(
    public router: Router,
    public localStorage: LocalStorageService,
    public securityClientService: SecurityClientService
  ){
  }

  ngOnInit(){
    this.clientId = Number(this.localStorage.get('id'));
    this.getSecurityClients();
  }

  getSecurityClients(){
    this.securityClientService.getSecurityClients(this.clientId)
    .then( res => console.log(res))
  }

  delete(securityClientID){
    this.securityClientService.deleteSecurityClient(securityClientID, this.clientId)
    .then( res => this.getSecurityClients())
  }
}
