import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JounralAppDashboardComponent } from './jounral-app-dashboard/jounral-app-dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';


const routes: Routes = [
  { path: '', component: JounralAppDashboardComponent },
  { path: "createtask", component: CreateTaskComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
