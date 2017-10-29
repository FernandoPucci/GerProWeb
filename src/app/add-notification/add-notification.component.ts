import { ScreenService } from './../services/screen.service';
import { DialogService } from 'ng2-bootstrap-modal';
import { DialogComponent } from 'ng2-bootstrap-modal';
import { Component, OnInit } from '@angular/core';
export interface AddNotificationModel {
  title: string;
  message: string; // optional
}
@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css'],
  providers: [ScreenService]
})

export class AddNotificationComponent extends DialogComponent<AddNotificationModel, boolean> implements AddNotificationModel, OnInit {

  title: string;
  message: string;
  notifications: any[];
  notification: any = {
    notification_type_id: '',
    pre_notify_days: '',
    pre_notify_hours: '',
    pre_notify_minutes: '',
    notify_again_every: ''
  }

  constructor(dialogService: DialogService, private screenService: ScreenService) {
    super(dialogService);
  }

  ngOnInit() {
    this.screenService.getNotifications().subscribe(notifications => this.notifications = notifications);
  }


  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }
}
