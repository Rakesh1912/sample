import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { ProtoService } from './proto.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ProtoService) { }

  model= {
    lname: '',
    pword:'',
    repword:'',
    mail:''
  };
  data:any;
  SampleData:any;
  DataValue:boolean = false;
  ngOnInit() {
    this.getDetails();
  }
 getDetails(){
  this.api.getProducts()
  .subscribe(res => {
    this.data = res;
    console.log(this.data);
  }, err => {
    console.log(err);
  });
 }
  onSubmit(Data){
    if(Data){
      this.DataValue = true;
      this.SampleData = Data;
    }
}
}
