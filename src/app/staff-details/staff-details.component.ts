import { Component, OnInit,Input } from '@angular/core';
import {Sir} from '../staff/sir';
@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {
@Input() hai : Sir;
  constructor() { }

  ngOnInit() {
  }

}
