import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { LoginService } from '../services/login-service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: '',
  styleUrls: ['./login.scss'],
  templateUrl: './admin-login.html'
})

export class AdminLoginComponent {

  loginForm: FormGroup;
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
    public loginService: LoginService
  ){
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.required)
    })
    this.loginForm.valueChanges
      .debounceTime(400)
      .subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      // clear previous error message
      this.formErrors[field] = [];
      this.loginForm[field] = '';
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
    this.loginService.getAdmin(values)
    .then( res => {
      console.log(res.json());
      this.router.navigate(['/createClientUser'])
    }, err => console.log(err))
    // this.router.navigate(['/profile']);
  }

}