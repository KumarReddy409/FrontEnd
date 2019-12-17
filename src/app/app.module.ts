import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ReactiveFormsModule,FormControl, FormsModule}  from '@angular/forms';

import { AppComponent } from './app.component';
import      {AdminRegisterComponent}  from './admin-register/admin-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewWorkLogComponent } from './view-work-log/view-work-log.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';


const appRoutes:Routes=[
  {path:'admin-register',component:AdminRegisterComponent},
  {path:'Dashboard',component:DashboardComponent},
   {path:'admin-login',component:AdminLoginComponent},
    {path:'userregister',component:UserRegisterComponent},
     {path:'userlogin',component:UserLoginComponent},
      {path:'viewemployee',component:ViewEmployeeComponent},
       {path:'viewworklog',component:ViewWorkLogComponent}
       
];

@NgModule({
  declarations: [
    AppComponent,
     AdminRegisterComponent,
     DashboardComponent,
     AdminLoginComponent,
     ViewEmployeeComponent,
     ViewWorkLogComponent,
     UserRegisterComponent,
     UserLoginComponent,
     
  ],
  imports: [
    BrowserModule,
   
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
