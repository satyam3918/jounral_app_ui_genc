import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JounralAppDashboardComponent } from './jounral-app-dashboard/jounral-app-dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { GetAllCurrentEntries } from './get-all-current-entries/get-all-current-entries.component';
import { GetbyNameComponent } from './get-all-current-entries-by-name/get-by-name.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { HistoryTasks } from './get-other-month-entries/history.component';



@NgModule({
  declarations: [
    AppComponent,
    JounralAppDashboardComponent,
    CreateTaskComponent,
    GetAllCurrentEntries,
    GetbyNameComponent,
    HistoryTasks
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
