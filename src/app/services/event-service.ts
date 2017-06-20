import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class EventService {

  api: string = 'http://192.168.0.103:14/api/';

  constructor(
    public http: Http
  ){}

  createEvent(data){
    return this.http.post(this.api + 'events', {
      //hay que ver la entidad eventos
    })
    .toPromise()
  }

  getEvent(data){
    return this.http.get(this.api + 'events/' + data.id, {})
    .toPromise()
  }

  editEvent(data){
    return this.http.post(this.api + 'events/' + data.id, {
      //hay que ver la entidad eventos
    })
    .toPromise()
  }

  deleteEvent(data){
    return this.http.post(this.api + 'events/delete/' + data.id,{})
    .toPromise()
  }

}
