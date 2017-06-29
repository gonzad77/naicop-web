import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class SecurityClientService {

  api: string = 'http://localhost:56185/api/';

  constructor(
    public http: Http
  ){}

  createSecurityClient(data){
    return this.http.post(this.api + 'securityClients', {
      Email: data.email,
      Password: data.password
    })
    .toPromise()
  }

  getSecurityClients(){
    return this.http.get(this.api + 'securityClients/',{})
    .toPromise()
  }

  deleteSecurityClient(securityClient){
    return this.http.post(this.api + 'securityClients/delete/',{
      ID: securityClient.ID
    })
    .toPromise()
  }

}
