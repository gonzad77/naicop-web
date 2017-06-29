import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class CategoryService {

  api: string = 'http://localhost:56185/api/';

  constructor(
    public http: Http
  ){}

  getCategories(){
    return this.http.get(this.api + 'categories', {})
    .toPromise()
  }

  createCategory(data){
    return this.http.post(this.api + 'categories', {
      'name' : data.name
    })
    .toPromise()
  }

  deleteCategory(data){
    console.log(data)
    return this.http.post(this.api + 'categories/delete/',{
      'name' : data.Name,
      'ID': data.ID
    })
    .toPromise()
  }

}
