import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

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
    public router: Router
  ){
  }

  ngOnInit(){
    this.createCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required)
    })
  }

}
