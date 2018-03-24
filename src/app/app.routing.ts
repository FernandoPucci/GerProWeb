import { Routes, RouterModule } from '@angular/router';
import { Component, ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task-index/new-task/new-task.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
