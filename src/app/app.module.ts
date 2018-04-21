
import { NewTaskComponent } from './new-task-index/new-task/new-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { appRouting } from './app.routing';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    PageNotFoundComponent,
    DaysWeekComponent,
    ConfirmComponent,
    LoginComponent

  ],
  imports: [
    appRouting,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    NgbModule.forRoot(),
    NewTaskIndexModule,
    NgProgressModule
  ],
  providers: [
    AuthGuard,
    AppService
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
