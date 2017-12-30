import { DialogService } from 'ng2-bootstrap-modal';
import { ScreenService } from './../services/screen.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AddNotificationComponent } from 'app/new-task-index/add-notification/add-notification.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [ScreenService]
})
export class NotificationsComponent implements OnInit {

  @Output() onNotificationAdd: EventEmitter<any> = new EventEmitter<any>();

  notifications: any = [
    // just test
    {
      "name": "XPTO",
      "notification_type_id": 19,
      "pre_notify_days": 0,
      "pre_notify_hours": 0,
      "pre_notify_minutes": 5,
      "notify_again_every": 5
    },
    {
      "name": "XPTO1",
      "notification_type_id": 19,
      "pre_notify_days": 0,
      "pre_notify_hours": 0,
      "pre_notify_minutes": 5,
      "notify_again_every": 5
    },
    {
      "name": "XPTO2",
      "notification_type_id": 19,
      "pre_notify_days": 0,
      "pre_notify_hours": 0,
      "pre_notify_minutes": 5,
      "notify_again_every": 5
    }

  ];

  constructor(private screenService: ScreenService, private dialogService: DialogService) { }

  ngOnInit(): void {
    if (this.notifications != null && this.notifications.length > 0) {
      this.emmitNotificationsList();
    }

  }

  showAddNotificationType() {
    let disposable = this.dialogService.addDialog(AddNotificationComponent, {
      title: 'Adicionar Notificação',
      message: ''
    })
      .subscribe((notificationToAdd) => {
        // We get dialog result
        if (notificationToAdd) {
          this.emmitNotificationsList(notificationToAdd);
        }
      });
  }

  eraseNotification(_notificationToErase) {
    this.notifications.splice(this.notifications.indexOf(_notificationToErase), 1);
    this.emmitNotificationsList();
  }

  emmitNotificationsList(_notificationToAdd = null) {

    if (_notificationToAdd != null) {
      this.notifications.push(
        _notificationToAdd
      );
    }

    let list = this.notifications.map(x => Object.assign({}, x));

    list.forEach(item => {
      delete item.name;
    });

    this.onNotificationAdd.emit(list);
  }

}
