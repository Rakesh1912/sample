import { Component, OnInit } from '@angular/core';
import {CollegeServiceService} from './pro.service';
import { Bag } from './badge';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model= {
    name: '',
    password:''
  };
  sampleData:any
  dat:boolean = false
  dataValue:boolean = false
  datasource:any;
  constructor(private api:CollegeServiceService) { }
  ngOnInit() {
    this.serviceData();
  }
serviceData(){
  this.api.getProducts()
  .subscribe(res => {
    console.log(res);
    this.datasource=res;
  }, err => {
    console.log(err);
  });
  this.dat = true;
 
}
  onSubmit(data){
  if(data){
    this.dataValue = true;
    //this.sampleData = this.serviceData();
  }
}
}
