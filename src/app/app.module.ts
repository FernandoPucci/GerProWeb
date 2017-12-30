
import { NewTaskComponent } from './new-task-index/new-task/new-task.component';
import { AddNotificationComponent } from './new-task-index/add-notification/add-notification.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { NgProgressModule } from 'ngx-progressbar';


import { AppComponent } from './app.component';
import { NewTaskIndexModule } from './new-task-index/new-task-index.module';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DaysWeekComponent } from './days-week/days-week.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ConfirmComponent } from './confirm/confirm.component';
import { ZeroLeadingPipe } from './pipes/zero-leading.pipe';
import { IndexNewTaskComponent } from 'app/new-task-index/index-new-task/index-new-task.component';
import { NgProgress } from 'ngx-progressbar/src/services/progress.service';
import { NotificationsComponent } from './notifications/notifications.component';

const appRoutes: Routes = [
  { path: 'newTask', component: IndexNewTaskComponent },
  { path: 'myTasks', component: MyTasksComponent },
  {
    path: 'new-task',
    component: NewTaskIndexModule,
    data: { title: 'Nova Tarefa' }
  },
  {
    path: 'my-tasks',
    component: MyTasksComponent,
    data: { title: 'Minhas Tarefas' }
  }
  ,
  {
    path: '',
    redirectTo: '#',
    pathMatch: 'full'
  }
  // ,
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    PageNotFoundComponent,
    DaysWeekComponent,
    ConfirmComponent
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //  { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule,
    BootstrapModalModule.forRoot({container:document.body}),
    NewTaskIndexModule,
    NgProgressModule
  ],
  providers: [],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
