import { Component, OnInit,Input } from '@angular/core';
import {Branch} from '../student/branch';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() hero : Branch;
  constructor() {
   }

  ngOnInit() {
  }
 

}
