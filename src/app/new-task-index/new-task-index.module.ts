import { AddNotificationComponent } from 'app/new-task-index/add-notification/add-notification.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';

import { CapitalizePipe } from 'app/pipes/capitalize.pipe';
import { ZeroLeadingPipe } from 'app/pipes/zero-leading.pipe';
import { IndexNewTaskComponent } from './index-new-task/index-new-task.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule
  ],
  declarations: [
    NewTaskComponent,
    AddNotificationComponent,
    CapitalizePipe,
    ZeroLeadingPipe,
    IndexNewTaskComponent
  ],
  entryComponents: [IndexNewTaskComponent, NewTaskComponent, AddNotificationComponent]
})
export class NewTaskIndexModule { }
