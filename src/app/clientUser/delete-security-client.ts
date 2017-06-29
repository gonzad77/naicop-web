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

  securities: Array<any>;

  constructor(
    public router: Router,
    public localStorage: LocalStorageService,
    public securityClientService: SecurityClientService
  ){
  }

  ngOnInit(){
    this.getSecurityClients();
  }

  getSecurityClients(){
    this.securityClientService.getSecurityClients()
    .then( res => this.securities = res.json())
  }

  delete(securityClient){
    this.securityClientService.deleteSecurityClient(securityClient)
    .then( res => {
      this.getSecurityClients()
    }, err => alert("Error at delete"))
  }
}
