import { Routes, RouterModule } from '@angular/router';
import { Component, ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { NewTaskComponent } from './new-task/new-task.component';
import { MyTasksComponent } from '../my-tasks/my-tasks.component';

const newTaskIndexRoutes: Routes = [
    { path: '', component: NewTaskComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
    { path: 'newTask', component: NewTaskComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
    { path: 'myTasks', component: MyTasksComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]}
];

export const newTaskRouting: ModuleWithProviders = RouterModule.forChild(newTaskIndexRoutes);
