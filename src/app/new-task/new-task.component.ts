import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as globals from '../globals';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  daysWeeks = globals.DAYS_WEEKS;

  constructor() { }

  ngOnInit() {
  }
}
