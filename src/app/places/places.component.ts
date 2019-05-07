import { Component, OnInit } from '@angular/core';
import {Places} from './place';
import { City } from '../mock-city';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places = City;
  selected: Places;
  constructor() { }

  ngOnInit() {

  }
  onSelect(Place:Places): void{
    this.selected = Place;
  }
}
