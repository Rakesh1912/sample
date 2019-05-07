import { Component, OnInit } from '@angular/core';
import {PrograService} from './progra.service';
import {Bag} from './mock';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  sampleData:any
  dat:boolean = false
  dataValue:boolean = false
  datasource:any;
  constructor(private api:PrograService) { }
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
