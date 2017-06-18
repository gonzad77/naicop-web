import {Component, OnInit, NgZone} from '@angular/core';
import { Event } from '../entities/event';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import * as $ from 'jquery/dist/jquery';


@Component({
  selector: '',
  styleUrls: ['./create-event.scss'],
  templateUrl: './create-event.html'
})

export class CreateEventComponent {

  lat: number = 51.678418;
  lng: number = 7.809007;
  geocoder: any
  autocompleteItems: any;
  GoogleAutocomplete: any;
  newEvent: Event;
  createEventForm: FormGroup;
  formErrors = {
    'name': [],
    'date': [],
    'timeStart': [],
    'timeFinish': []
  };
  validationMessages = {
    'name': {
      'required': 'Name is required'
    },
    'date':{
      'required':     'Date is required'
    },
    'timeStart':{
      'required':     'Start time is required'
    },
    'timeFinish':{
      'required':     'Finish time is required'
    }
  };

  constructor(
    public router: Router,
    public zone: NgZone
  ){
    this.geocoder = new google.maps.Geocoder;
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
  }

  ngOnInit(){
    let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13
    });
    this.createEventForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dateStart: new FormControl('', Validators.required),
      dateFinish: new FormControl('', Validators.required),
      timeStart: new FormControl('', Validators.required),
      timeFinish: new FormControl('', Validators.required),
      autocomplete: new FormControl('', Validators.required)
    })
    this.createEventForm.valueChanges
      .debounceTime(400)
      .subscribe(data => {
        console.log(data);
        this.onValueChanged(data);
        this.updateSearch();
      });
  }

  onValueChanged(data?: any) {
    if (!this.createEventForm) { return; }
    const form = this.createEventForm;
    for (const field in this.formErrors) {
      // clear previous error message
      this.formErrors[field] = [];
      this.createEventForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field].push(messages[key]);
        }
      }
    }
  }

  updateSearch(){
    let autocomplete = this.createEventForm.get('autocomplete').value;
    if (autocomplete == '') {
      this.autocompleteItems = [];
      return;
    }
    let env = this;
    this.GoogleAutocomplete.getPlacePredictions({ input: autocomplete }, function (predictions, status) {
      env.autocompleteItems = [];
      env.zone.run(function () {
        predictions.forEach(function (prediction) {
          env.autocompleteItems.push(prediction);
        });
      });
    });
  }

  chooseItem(item){
    this.geocoder.geocode({'placeId': item.place_id}, function(results, status) {
      if(status === 'OK'){
        if(results[0]){
          var map = new google.maps.Map(document.getElementById('map'));
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
          marker.setVisible(true);
          map.setCenter(results[0].geometry.location);
          map.setZoom(17);
          this.autocompleteItems = [];
        }
      }
    })
  }


  onSubmit(values){
    console.log(values);
  }

}