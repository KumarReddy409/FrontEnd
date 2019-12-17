import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor() { }
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null,Validators.required),
       'lastName': new FormControl(null,Validators.required),
        'password': new FormControl(null,[Validators.required]),
         'email': new FormControl(null,[Validators.required, Validators.email]),
          'mobile': new FormControl(null,Validators.required),
           'role': new FormControl(null,Validators.required)
          });
  }
  

}
