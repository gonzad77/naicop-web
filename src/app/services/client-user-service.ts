import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientUserService {

  api: string = 'http://localhost:56185/api/';

  constructor(
      public http: Http
  ){}

  getClientUser(data){
    return this.http.get(this.api + 'clientUsers/' + data, {})
    .toPromise()
  }

  getClientUsers(){
    return this.http.get(this.api + 'clientUsers/', {})
    .toPromise()
  }

  createClientUser(data, image, imageTitle){
    return this.http.post(this.api + 'clientUsers/', {
      email: data.email,
      password: data.password,
      description: data.description,
      image: image,
      image_name: imageTitle
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
    return this.http.post(this.api + 'clientUsers/delete/',{
      'ID': data.ID
    })
    .toPromise()
  }

}
