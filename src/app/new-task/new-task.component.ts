import { ConfirmComponent } from './../confirm/confirm.component';
import { AddNotificationComponent } from './../add-notification/add-notification.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { CapitalizePipe } from './../pipes/capitalize.pipe';
import { ScreenService } from './../services/screen.service';
import { environment } from './../../environments/environment';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import * as globals from '../globals';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [ScreenService]
})
export class NewTaskComponent implements OnInit {

  daysTimes: any[];
  places: any[];
  notifications: any[];
  periodicities: any[];
  checkers: any[];

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
  //                "pre_notify_minutes": 5,
  //                "notify_again_every": 5
  //            }
  //        ],
  //        "weeks_days": 
  //            {
  //                "sunday": true,
  //                "monday": true,
  //                "tuesday": true,
  //                "wednesday": tMaterializeActionrue,
  //                "thursday": true,
  //                "friday": true,.target.
  //                "saturday": true
  //            }weeks_days

  //     }


  constructor(private screenService: ScreenService, private dialogService: DialogService) { }

  ngOnInit() {
    this.screenService.getPlaces().subscribe(places => this.places = places);
    this.screenService.getNotifications().subscribe(notifications => this.notifications = notifications);
    this.screenService.getPeriodicities().subscribe(periodicities => this.periodicities = periodicities);
    this.screenService.getUserCheckers(1).subscribe(checkers => this.checkers = checkers);
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

  showAddNotificationType() {
    let disposable = this.dialogService.addDialog(AddNotificationComponent, {
      title: 'Adicionar Notificação',
      message: ''
    })
      .subscribe((isConfirmed) => {
        //We get dialog result
        if (isConfirmed) {
          // TODO: push a notification in notifications[]
        }
      });
  }

  getAddedNotification(event){
    console.log(event.target);
  }

}
