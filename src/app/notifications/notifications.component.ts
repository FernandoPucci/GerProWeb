import { ScreenService } from './../services/screen.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { NgbActiveModal, NgbModalRef, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


const MAXIMUM_DAYS_PRE_NOTIFY: number = 15;
const MAXIMUM_HOURS_PRE_NOTIFY: number = 23;
//
const MAXIMUM_MINUTES_PRE_NOTIFY: number = 55;
const MINUTES_GAP_PRE_NOTIFY: number = 5;
//
const MAXIMUM_MINUTES_NOTIFY_AGAIN: number = 15;
const MINUTES_GAP_NOTIFY_AGAIN: number = 5;


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [ScreenService, NgbModal, NgbActiveModal]
})


export class NotificationsComponent implements OnInit {

  //
  modal: NgbModalRef;
  closeResult: string;
  //
  days: any[] = [];
  hours: any[] = [];
  minutes: any[] = [];
  minutesNotifyAgain: any[] = [];
  //
  title: string;
  message: string;
  //
  notification: any = {
    name: '',
    notification_type_id: '',
    pre_notify_days: '',
    pre_notify_hours: '',
    pre_notify_minutes: '',
    notify_again_every: 0
  };
  notificationsModal: any[];

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

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, public ngProgress: NgProgress, private screenService: ScreenService) { }

  ngOnInit(): void {

    this.ngProgress.start();

    if (this.notifications != null && this.notifications.length > 0) {
      this.emmitNotificationsList();
    }

    this.screenService.getNotifications().subscribe(notifications => {
      this.notificationsModal = notifications;
      //
      this.loadHoursArray();
      this.loadMinutesArray();
      this.loadDaysArray();
      this.loadMinutesNotifyAgainArray();
      //
      this.ngProgress.done();
    });

  }
  open(content) {
    this.modal = this.modalService.open(content);
    this.modal.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(content) {
    let splitArray = this.notification.notification_type_id.split('#');

    this.notification.name = splitArray[1];
    this.notification.notification_type_id = splitArray[0];

    console.log(this.notification);
    this.emmitNotificationsList(this.notification);

    this.modal.close(content);


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

  // showAddNotificationType() {
  //   let disposable = this.dialogService.addDialog(AddNotificationComponent, {
  //     title: 'Adicionar Notificação',
  //     message: ''
  //   })
  //     .subscribe((notificationToAdd) => {
  //       // We get dialog result
  //       if (notificationToAdd) {
  //         this.emmitNotificationsList(notificationToAdd);
  //       }
  //     });
  // }

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
