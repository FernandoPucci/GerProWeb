import { NgProgress } from 'ngx-progressbar';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { AddNotificationComponent } from './../add-notification/add-notification.component';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { ScreenService } from './../../services/screen.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit, EventEmitter, Input, SimpleChanges } from '@angular/core';
import * as globals from '../../globals';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [ScreenService, NgbModal]
})
export class NewTaskComponent implements OnInit, OnChanges {

  daysTimes: any[];
  places: any[];
  periodicities: any[];
  checkers: any[];

  taskCheck: any = {
    days_times: [],
    notifications: [

      // // just test
      // {
      //   "notification_type_id": 19,
      //   "pre_notify_days": 0,
      //   "pre_notify_hours": 0,
      //   "pre_notify_minutes": 5,
      //   "notify_again_every": 5
      // },
      // {
      //   "notification_type_id": 19,
      //   "pre_notify_days": 0,
      //   "pre_notify_hours": 0,
      //   "pre_notify_minutes": 5,
      //   "notify_again_every": 5
      // },
      // {
      //   "notification_type_id": 19,
      //   "pre_notify_days": 0,
      //   "pre_notify_hours": 0,implements OnInit
      //   "pre_notify_minutes": 5,
      //   "notify_again_every": 5
      // }


    ],
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
  //  "notifications": [
  //            {
  //                "notification_type_id": 19,
  //                "pre_notify_days": 0,
  //                "pre_notify_hours": 0,
  //                "pre_notify_minutes": 5,
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
  @Input() notify: any;

  constructor(private screenService: ScreenService,  public ngProgress: NgProgress) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {

    this.screenService.getPlaces().subscribe(places => {
      this.ngProgress.start();
      this.places = places;
      //
      this.ngProgress.done();

    });
    this.screenService.getPeriodicities().subscribe(periodicities => {
      this.ngProgress.start();
      this.periodicities = periodicities;
      //
      this.ngProgress.done();
    });
    this.screenService.getUserCheckers(1).subscribe(checkers => {
      this.ngProgress.start();
      this.checkers = checkers;
      //
      this.ngProgress.done();
    });
  }

  eraseAll() {
    this.taskCheck = {
      days_times: [],
      notifications: [],
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

  notifications_onNotificationsAdd(_notificationsList) {
    this.taskCheck.notifications = _notificationsList;
  }

}
