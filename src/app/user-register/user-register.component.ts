import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }
  signupForm:FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null,Validators.required),
       'lastName': new FormControl(null,Validators.required),
        'password': new FormControl(null,[Validators.required]),
         'email': new FormControl(null,[Validators.required, Validators.email]),
          'mobile': new FormControl(null,Validators.required)
            });
  }
  
}
