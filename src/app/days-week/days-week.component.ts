import { Component, OnInit } from '@angular/core';
import * as globals from '../globals';

@Component({
  selector: 'app-days-week',
  templateUrl: './days-week.component.html',
  styleUrls: ['./days-week.component.css']
})
export class DaysWeekComponent implements OnInit {

  daysWeeks = globals.DAYS_WEEKS;

  constructor() { }

  ngOnInit() {
  }

}
