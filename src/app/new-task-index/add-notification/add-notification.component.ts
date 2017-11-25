import { ScreenService } from './../../services/screen.service';
import { DialogService } from 'ng2-bootstrap-modal';
import { DialogComponent } from 'ng2-bootstrap-modal';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
export interface AddNotificationModel {
  title: string;
  message: string; // optional
}

const MAXIMUM_DAYS_PRE_NOTIFY: number = 15;
const MAXIMUM_HOURS_PRE_NOTIFY: number = 23;
//
const MAXIMUM_MINUTES_PRE_NOTIFY: number = 55;
const MINUTES_GAP_PRE_NOTIFY: number = 5;
//
const MAXIMUM_MINUTES_NOTIFY_AGAIN: number = 15;
const MINUTES_GAP_NOTIFY_AGAIN: number = 5;


@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css'],
  providers: [ScreenService]
})

export class AddNotificationComponent extends DialogComponent<AddNotificationModel, boolean> implements AddNotificationModel, OnInit {

  // @Output() notificationToAdd: EventEmitter<any> = new EventEmitter();

  days: any[] = [];
  hours: any[] = [];
  minutes: any[] = [];
  minutesNotifyAgain: any[] = [];
  //
  title: string;
  message: string;
  notifications: any[];
  //
  notification: any = {
    notification_type_id: '',
    pre_notify_days: '',
    pre_notify_hours: '',
    pre_notify_minutes: '',
    notify_again_every: 0
  };

  constructor(dialogService: DialogService, private screenService: ScreenService) {
    super(dialogService);
  }

  ngOnInit() {
    this.screenService.getNotifications().subscribe(notifications => this.notifications = notifications);
    //
    this.loadHoursArray();
    this.loadMinutesArray();
    this.loadDaysArray();
    this.loadMinutesNotifyAgainArray();
  }

  loadHoursArray() {
    for (let index = 0; index <= MAXIMUM_HOURS_PRE_NOTIFY; index++) {
      this.hours.push({ hour: index });
    }
  }

  loadMinutesArray() {
    for (let index = 0; index <= MAXIMUM_MINUTES_PRE_NOTIFY;) {
      this.minutes.push({ minute: index });
      index = index + MINUTES_GAP_PRE_NOTIFY;
    }
  }

  loadDaysArray() {
    for (let index = 0; index <= MAXIMUM_DAYS_PRE_NOTIFY; index++) {
      this.days.push({ day: index });
    }
  }

  loadMinutesNotifyAgainArray() {
    for (let index = 0; index <= MAXIMUM_MINUTES_NOTIFY_AGAIN;) {
      this.minutesNotifyAgain.push({ notifyAgainEvery: index });
      index = index + MINUTES_GAP_NOTIFY_AGAIN;
    }
  }

  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = this.notification;
    this.close();
  }
}
