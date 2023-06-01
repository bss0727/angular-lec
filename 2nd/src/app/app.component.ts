import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  loginBool = true;
  boardBool = false;

    getEventThanks(event){
    console.log(event)
    if(event == true){
      this.loginBool = false;
      this.boardBool = true;
    }
  }
}