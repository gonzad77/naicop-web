import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class LoginService {

  api: string = 'http://192.168.0.103:14/api/';

  constructor(
    public http: Http
  ){}

  getAdmin(data){
    console.log(data)
    return this.http.post(this.api + 'admins/login', {
      'email' : data.email,
      'password' : data.password
    })
    .toPromise()
  }

}
