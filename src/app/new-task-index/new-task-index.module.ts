import { NotificationsComponent } from './../notifications/notifications.component';
import { AddNotificationComponent } from 'app/new-task-index/add-notification/add-notification.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';
import { BsModalModule } from 'ng2-bs3-modal';
import { newTaskRouting } from './new-task-index.routing'; 

import { CapitalizePipe } from 'app/pipes/capitalize.pipe';
import { ZeroLeadingPipe } from 'app/pipes/zero-leading.pipe';
import { IndexNewTaskComponent } from './index-new-task/index-new-task.component';



@NgModule({
  imports: [
    newTaskRouting,
    CommonModule,
    BsModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule
  ],
  declarations: [
    NewTaskComponent,   
    AddNotificationComponent,
    NotificationsComponent,
    CapitalizePipe,
    ZeroLeadingPipe,
    IndexNewTaskComponent
  ],
  entryComponents: [IndexNewTaskComponent, NewTaskComponent, AddNotificationComponent]
})
export class NewTaskIndexModule { }
