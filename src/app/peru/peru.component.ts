import { Component, OnInit } from '@angular/core';
import {Perus} from './perus';
import { Peru } from '../peru';
@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.css']
})
export class PeruComponent implements OnInit {

peru = Perus;
selected: Peru;
  constructor() { }

  ngOnInit() {

  }
  onSelect(Peru:Peru): void{
    this.selected = Peru;
  }
}
