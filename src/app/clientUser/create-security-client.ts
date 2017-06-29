import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { SecurityClientService } from '../services/security-client-service';


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
    public router: Router,
    public securityClientService: SecurityClientService
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
    this.createSCForm.valueChanges
      .debounceTime(400)
      .subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.createSCForm) { return; }
    const form = this.createSCForm;
    for (const field in this.formErrors) {
      // clear previous error message
      this.formErrors[field] = [];
      this.createSCForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field].push(messages[key]);
        }
      }
    }
  }

  onSubmit(values){
    this.securityClientService.createSecurityClient(values)
    .then( res => {
      alert('SecurityClient created')
    }, err => alert('Error at create'))
  }
}
