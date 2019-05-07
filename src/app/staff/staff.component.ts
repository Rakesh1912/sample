import { Component, OnInit } from '@angular/core';
import {Sir} from '../staff/sir';
import {Faculty} from '../staff/faculty';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
Staff = Faculty;
selected: Sir;
staffdetails:any
  constructor() { }

  ngOnInit() {
  }
onSelect(){
this.staffdetails = this.Staff;
}
}
