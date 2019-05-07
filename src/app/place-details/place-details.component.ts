import { Component, OnInit,Input } from '@angular/core';
import {Places} from '../places/place';
@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
 @Input() place :Places;
  constructor() { }

  ngOnInit() {
  }

}
