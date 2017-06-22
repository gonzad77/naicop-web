import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class SecurityClientService {

  api: string = 'http://192.168.0.103:14/api/';

  constructor(
    public http: Http
  ){}

  createSecurityClient(data){
    return this.http.post(this.api + 'securityClient', {
      //hay que ver la entidad securityClient
    })
    .toPromise()
  }

  getSecurityClients(data){
    return this.http.get(this.api + 'securityClient/' + data, {})
    .toPromise()
  }

  deleteSecurityClient(clientId, securityClientId){
    return this.http.post(this.api + 'securityClient/delete/',{})
    .toPromise()
  }

}
