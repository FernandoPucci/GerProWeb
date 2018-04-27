import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MyTasksService } from './my-tasks.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
  providers: [MyTasksService]
})
export class MyTasksComponent implements OnInit {

  taskChecks: any[];
  // taskChecks: Observable<any>;
  // myTasksService: MyTasksService;

  constructor(private myTasksService: MyTasksService) {
    this.myTasksService = myTasksService;
  }

  ngOnInit() {
    this.myTasksService.getTasks().subscribe(taskChecks => this.taskChecks = taskChecks);

    console.log(this.taskChecks);
  }

}
