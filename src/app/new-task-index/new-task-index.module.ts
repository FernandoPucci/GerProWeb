import { NotificationsComponent } from './../notifications/notifications.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { newTaskRouting } from './new-task-index.routing'; 

import { CapitalizePipe } from 'app/pipes/capitalize.pipe';
import { ZeroLeadingPipe } from 'app/pipes/zero-leading.pipe';
import { IndexNewTaskComponent } from './index-new-task/index-new-task.component';



@NgModule({
  imports: [
    NgbModule,
    newTaskRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule
  ],
  declarations: [
    NewTaskComponent, 
    NotificationsComponent,
    CapitalizePipe,
    ZeroLeadingPipe,
    IndexNewTaskComponent
  ],
  entryComponents: [IndexNewTaskComponent, NewTaskComponent]
})
export class NewTaskIndexModule { }
