import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JounralAppDashboardComponent } from './jounral-app-dashboard/jounral-app-dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { GetAllCurrentEntries } from './get-all-current-entries/get-all-current-entries.component';
import { GetbyNameComponent } from './get-all-current-entries-by-name/get-by-name.component';


const routes: Routes = [
  { path: '', component: JounralAppDashboardComponent },
  { path: 'createtask', component: CreateTaskComponent},
  { path: 'getAllCurrentEntries', component: GetAllCurrentEntries},
  { path: 'getAllCurrentEntriesWithName/:taskName', component: GetbyNameComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
