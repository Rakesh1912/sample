import { Component, OnInit } from '@angular/core';
import {Username} from './username'
@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor() { }

  username: Username = {
    lname: '',
    pword:'',
    repword:'',
    mail:''
  };
  ngOnInit() {
  }

}
