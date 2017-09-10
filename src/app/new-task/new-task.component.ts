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
       monday: true,
       tuesday: true,
       wednesday: true,
       thursday: true,
       friday: true,
       saturday: true
    }
  };

  wd: any = [
    { idx: 0, 'chk': false, name: 'sunday', label: 'Domingo' },
    { idx: 1, 'chk': true, name: 'monday', label: 'Segunda-Feira' },
    { idx: 2, 'chk': true, name: 'tuesday', label: 'Terça-Feira' },
    { idx: 3, 'chk': true, name: 'wednesday', label: 'Quarta-Feira' },
    { idx: 4, 'chk': true, name: 'thursday', label: 'Quinta-Feira' },
    { idx: 5, 'chk': true, name: 'friday', label: 'Sexta-Feira' },
    { idx: 6, 'chk': true, name: 'saturday', label: 'Sábado' }
  ];



  //weekDays: any = [];


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

  onWeeksDaysToggle($event) {

    console.log($event.target.checked);
    console.log($event.target.value);

    console.log(this.wd.find((item => item.name === $event.target.value)));
    //  if ($event.target.checked) {label
    //this.taskCheck.weeks_days  = this.wd; 
//      console.log(this.taskCheck.weeks_days);
      
      //  this.taskCheck.weeks_days.push($event.target.value);
    //  } else {
    //   var index = this.taskCheck.week_days.indexOf(day);

    //   this.taskCheck.week_days.splice(index, 1);

    // }
  }

}
