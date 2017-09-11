import { element } from 'protractor';
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


  taskCheck: any = {
    days_times: [],
    weeks_days: {
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false
    }
  };


  //   { "name": "testes Funções DEV 2",
  //   "description": "Testes Funções Diário",
  //  "place_id": 1,
  //  "user_checker_id": 2,
  //  "periodicity_id": 1,
  //  "starts_at": "2017-07-01",
  //  "ends_at": null,
  //  "repeats_every": 1,
  //  "updated_by_user_id":1,
  //  "days_times": [
  //            {

  //                "hour": 9,
  //                "minute": 30
  //            }
  //        ],
  //        "notifications": [
  //            {
  //                "notification_type_id": 19,
  //                "pre_notify_days": 0,
  //                "pre_notify_hours": 0,
  //                "pre_notify_minutes": 5Domingo, = $event.target.checked;
  //                "notify_again_every": 5
  //            }
  //        ],
  //        "weeks_days": 
  //            {
  //                "sunday": true,
  //                "monday": true,
  //                "tuesday": true,
  //                "wednesday": true,
  //                "thursday": true,
  //                "friday": true,.target.
  //                "saturday": true
  //            }weeks_days

  //     }


  constructor() { }

  ngOnInit() {


  }

  eraseAll() {
    this.taskCheck = {
      days_times: [],
      weeks_days: {
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
      }
    };
  }

}
