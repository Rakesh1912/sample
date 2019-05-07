import { Component, OnInit } from '@angular/core';
import {College} from './college';
import{Branch} from './branch';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
student = College;
selected: Branch;
stutentDetails:any
  constructor() { }

  ngOnInit() {
    
  }
onSelect(){
this.stutentDetails = this.student;
}
}
