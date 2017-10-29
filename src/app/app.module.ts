import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';


import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DaysWeekComponent } from './days-week/days-week.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ConfirmComponent } from './confirm/confirm.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';

const appRoutes: Routes = [
  { path: 'newTask',      component: NewTaskComponent },
  { path: 'myTasks',      component: MyTasksComponent },
  {
    path: 'new-task',
    component: NewTaskComponent,
    data: { title: 'Nova Tarefa' }
  },
  {
    path: 'my-tasks',
    component: MyTasksComponent,
    data: { title: 'Minhas Tarefas' }
  }
  ,
  { path: '',
    redirectTo: '#',
    pathMatch: 'full'
  }
  // ,
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    MyTasksComponent,
    PageNotFoundComponent,
    DaysWeekComponent,
    CapitalizePipe,
    ConfirmComponent,
    AddNotificationComponent
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
    BootstrapModalModule
  ],
  providers: [],
  entryComponents: [
    ConfirmComponent,
    AddNotificationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
