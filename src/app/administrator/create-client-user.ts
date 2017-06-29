import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { ClientUser } from '../entities/clientUser';
import 'rxjs/add/operator/debounceTime';
import { ClientUserService } from '../services/client-user-service';


@Component({
  selector: '',
  styleUrls: ['./create-client-user.scss'],
  templateUrl: './create-client-user.html'
})

export class CreateClientUserComponent {

  image: string;
  imageName: string;
  clientUser: ClientUser;
  createCUForm: FormGroup;
  formErrors = {
    'password': [],
    'email': [],
    'description': []
  };
  validationMessages = {
    'email': {
      'required':      'Email is required',
      'pattern':      'Incorrect format'
    },
    'password': {
      'required': 'Name is required'
    },
    'description':{
      'required':     'Description is required'
    }
  };


  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public clientUserService: ClientUserService
  ){
  }

  ngOnInit(): void {
    this.createCUForm = new FormGroup({
      password: new FormControl('', Validators.required),
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
    this.image = event.src;
    this.imageName = event.file.name;
  }

  onSubmit(values){
    let separatedImage = this.image.split(",");
    let image = separatedImage[1];
    this.clientUserService.createClientUser(values, image,this.imageName)
    .then( res => {
    alert("ClientUser created")
  }, err => alert("An error has ocurred"))
  }
}
