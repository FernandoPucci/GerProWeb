import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-index-new-task',
  templateUrl: './index-new-task.component.html',
  styleUrls: ['./index-new-task.component.css']
})
export class IndexNewTaskComponent implements OnInit {

  @Output() notificationToSend: EventEmitter<any> = new EventEmitter();

  showModal: boolean = false;
  myNote: any;
  constructor() { }
  ngOnInit() {
  }
  getAddedNotification(event) {
    console.log('!!!!!');
    console.log(event);
    this.myNote = 'ewf  ';
    this.notificationToSend.emit(this.myNote);
  }

}
