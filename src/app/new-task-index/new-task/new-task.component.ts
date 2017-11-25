import { ConfirmComponent } from '../../confirm/confirm.component';
import { AddNotificationComponent } from './../add-notification/add-notification.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { ScreenService } from './../../services/screen.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import * as globals from '../../globals';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';




@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [ScreenService]
})
export class NewTaskComponent implements OnInit, OnChanges {

  daysTimes: any[];
  places: any[];
  periodicities: any[];
  checkers: any[];

  taskCheck: any = {
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
  //                "wednesday": tMaterializeActionrue,
  //                "thursday": true,
  //                "friday": true,.target.
  //                "saturday": true
  //            }weeks_days

  //     }
  @Input() notify: any;

  constructor(private screenService: ScreenService, private dialogService: DialogService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    this.screenService.getPlaces().subscribe(places => this.places = places);
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
      .subscribe((notificationToAdd) => {
        // We get dialog result
        if (notificationToAdd) {
          this.taskCheck.notifications.push(notificationToAdd);
        }
      });
  }

  getAddedNotification(event) {
    console.log('@@@@ ACIVATED!');
    console.log(event);
  }

}
