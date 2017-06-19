import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { ClientUser } from '../entities/clientUser';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: '',
  styleUrls: ['./create-client-user.scss'],
  templateUrl: './create-client-user.html'
})

export class CreateClientUserComponent {

  image: string;
  clientUser: ClientUser;
  createCUForm: FormGroup;
  formErrors = {
    'name': [],
    'email': [],
    'description': []
  };
  validationMessages = {
    'email': {
      'required':      'Email is required',
      'pattern':      'Incorrect format'
    },
    'name': {
      'required': 'Name is required'
    },
    'description':{
      'required':     'Description is required'
    }
  };


  constructor(
    public route: ActivatedRoute,
    public router: Router
  ){
  }

  ngOnInit(): void {
    this.createCUForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      description: new FormControl('', Validators.required)
    })
    this.createCUForm.valueChanges
      .debounceTime(400)
      .subscribe(data => this.onValueChanged(data));
    this.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ181ymQmkojMSCAhcfH7EUkuE2dsoI27PhqaqmCZs4P_UhPc2vyQh6w";
  }

  onValueChanged(data?: any) {
    if (!this.createCUForm) { return; }
    const form = this.createCUForm;
    for (const field in this.formErrors) {
      // clear previous error message
      this.formErrors[field] = [];
      this.createCUForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field].push(messages[key]);
        }
      }
    }
  }

  imageUploaded(event){
    this.image = event.src
  }

  onSubmit(values){
    console.log(values);
  }
}
