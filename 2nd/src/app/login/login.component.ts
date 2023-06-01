import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

declare type MyCustomType = {
  text : any;
  number : any;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() visible1! : boolean;
  @Output() sendMyEvent : EventEmitter<any> = new EventEmitter(); 
  id = new FormControl('');  
  pwd = new FormControl('', [ Validators.required, Validators.minLength(4) ]); 
  private message;
  styleArray = {'wrong_id':false, 'wrong_pwd':false};

  private test : MyCustomType = {  
    text :'',
    number : 1234
  };
  constructor() { 
    
  }
  ngOnInit(): void {
    
  }
  tryToLogin() : void{
    console.log(this.pwd)
    if(this.id.value =='admin' && this.pwd.value == '1234'){
      alert('로그인합니다!');
      this.visible1 = true;
      this.sendMyEvent.emit(this.visible1);  
    } else if(this.id.value != 'admin'){
      this.setMessage = 'wrong id';
      this.styleArray.wrong_id = true;
      this.styleArray.wrong_pwd = false;
    } else if(this.pwd.value != '1234'){
      this.setMessage = 'wrong pwd';
      this.styleArray.wrong_id = false;
      this.styleArray.wrong_pwd = true;
    } 
  }
  set setMessage(arg){  
    this.message = arg;
  } 
  get getMessage() : any{  
    return this.message;
  }

}