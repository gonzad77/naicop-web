import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class EventService {

  api: string = 'http://localhost:56185/api/';

  constructor(
    public http: Http
  ){}

  createEvent(data, image, imageName, lat, lng, clientId){
    return this.http.post(this.api + 'events', {
      title: data.title,
      description: data.description ,
      image:image,
      image_name: imageName,
      latitude: lat,
      longitude: lng,
      max_capacity: data.capacity,
      category_id: data.category,
      client_user_id: clientId,
      start_date: data.dateStart +' '+ data.timeStart + ':00',
      end_date: data.dateFinish +' '+ data.timeFinish + ':00',
      price: data.price
    })
    .toPromise()
  }

  getEvents(){
    return this.http.get(this.api + 'events/', {})
    .toPromise()
  }

  editEvent(data){
    return this.http.post(this.api + 'events/' + data.id, {
      //hay que ver la entidad eventos
    })
    .toPromise()
  }

  deleteEvent(data){
    return this.http.post(this.api + 'events/delete/',{
      ID: data.ID
    })
    .toPromise()
  }

}
