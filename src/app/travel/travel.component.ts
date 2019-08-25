import { Component, OnInit, Input } from '@angular/core';
import { Country } from './country';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent implements OnInit {
  @Input() data: Country[];
  travel: string = "";

  constructor() { }

  ngOnInit() {
  }

}
