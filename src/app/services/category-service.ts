import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class CategoryService {

  api: string = 'http://192.168.0.103:14/api/';

  constructor(
    public http: Http
  ){}

  createCategory(data){
    return this.http.post(this.api + 'categories', {
      'name' : data.name
    })
    .toPromise()
  }

  getCategory(data){
    return this.http.get(this.api + 'categories/' + data.id, {})
    .toPromise()
  }

  editCategory(data){
    return this.http.post(this.api + 'categories/' + data.id, {
      'name' : data.name
    })
    .toPromise()
  }

  deleteCategory(data){
    return this.http.post(this.api + 'categories/delete/' + data.id,{})
    .toPromise()
  }

}
