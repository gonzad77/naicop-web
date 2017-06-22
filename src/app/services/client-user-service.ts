import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientUserService {

  api: string = 'http://192.168.0.103:14/api/';

  constructor(
      public http: Http
  ){}

  getClientUser(data){
    return this.http.get(this.api + 'clientUser/' + data, {})
    .toPromise()
  }

  getClientUsers(){
    return this.http.get(this.api + 'clientUser/', {})
    .toPromise()
  }

  createClientUser(data){
    return this.http.post(this.api + 'clientUser/', {
      //hay que ver la entidad clientUser
    })
    .toPromise()
  }

  updateClientUser(data){
    return this.http.post(this.api + 'clientUser/' + data, {
      //hay que ver la entidad clientUser
    })
    .toPromise()
  }

  deleteClientUser(data){
    return this.http.post(this.api + 'clientUser/delete/' + data ,{})
    .toPromise()
  }

}
