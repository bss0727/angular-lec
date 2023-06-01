import { Component, OnInit } from '@angular/core';

import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

declare type MyType = {
  text : any;
  number : any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  builder! : FormBuilder;
  rows!: FormArray;
  formGrp! : FormGroup;
  single! : FormControl;
  DataArray : Array<MyType> = [ ];

  constructor(fb : FormBuilder) { 
    this.builder = fb;
    this.rows = this.builder.array([]);
    this.single = new FormControl('Title', Validators.required);
    this.formGrp  = this.builder.group({'row_data':this.rows, 'single_data' : this.single});
  }

  ngOnInit(): void {
    for(var i = 0;i < 10;i++){
      var group = this.builder.group({ 
        text : this.builder.control('abcd'+i, Validators.minLength(5)),   //control 함수는 FormControl을 만드는 역할을 합니다. 
        number: this.builder.control(i, Validators.required)
      });
      this.rows.push(group);
    }
  }

  showData(arg?){
    if(arg){
      console.log(arg);
    } else {
      console.log(this.formGrp);
    }
  }
}