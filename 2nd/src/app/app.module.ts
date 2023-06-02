import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { ReactiveFormsModule } from '@angular/forms';  

import {INFORMATION} from './Mytype';

const myData : INFORMATION = {  
  data1 : 'data1',
  data2 : 1433,
  data3 : ['data3_1','data3_2']
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule
  ],
  providers: [
    {provide:'sending_name',useValue:myData}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }