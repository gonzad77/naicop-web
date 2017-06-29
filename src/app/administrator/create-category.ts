import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { CategoryService } from '../services/category-service';


@Component({
  selector: '',
  styleUrls: ['./create-category.scss'],
  templateUrl: './create-category.html'
})

export class CreateCategoryComponent {

  createCategoryForm: FormGroup;
  formErrors = {
    'name': []
  };
  validationMessages = {
    'name': {
      'required': 'Name is required'
    }
  };


  constructor(
    public router: Router,
    public categoryService: CategoryService
  ){
  }

  ngOnInit(){
    this.createCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

  onSubmit(values){
    this.categoryService.createCategory(values)
    .then( res => {
      console.log(res);
      alert("Category created")
    }, err => ("An error has ocurred"))
  }

}
