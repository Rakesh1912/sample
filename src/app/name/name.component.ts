import { Component, OnInit } from '@angular/core';
import {Name} from './name'
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  name:any;
 

  constructor() { 
    this.name = {
    lname: '',
    pword: '',
    repword: '',
    mail: ''
  };}

  ngOnInit() {
  }

}
