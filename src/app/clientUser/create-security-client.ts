import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: '',
  styleUrls: ['./create-security-client.scss'],
  templateUrl: './create-security-client.html'
})

export class CreateSecurityClientComponent {

  createSCForm: FormGroup;
  formErrors = {
    'email': [],
    'password': []
  };
  validationMessages = {
    'email': {
      'required':      'Email is required',
      'pattern':      'Incorrect format'
    },
    'password': {
      'required': 'Password is required'
    }
  };


  constructor(
    public router: Router
  ){
  }

  ngOnInit(){
    this.createSCForm = new FormGroup({
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    })
  }

}
