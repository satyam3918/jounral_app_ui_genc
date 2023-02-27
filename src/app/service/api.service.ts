import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { createtask } from '../createtask';
import { tasks } from '../tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  //Local URLs
  createtaskUrl = 'http://localhost:8080/api/v1/addEntry';
  fetchtaskUrl =  'http://localhost:8080/api/v1/getAllCurrentEntries';
  fetchcurrenttaskUrl = 'http://localhost:8080/api/v1/getAllCurrentEntriesWithTaskName/';



  createtaskSuccess: boolean = false;
  createtaskResponse: createtask = new createtask;
  createtaskResponseList: createtask[] = new Array;



  constructor(private httpClient: HttpClient) {

  }

  //GET,POST,DELETE

  postCreatetask(createtaskRequest: any) {
    return this.httpClient.post(this.createtaskUrl + '/createtask', createtaskRequest, {responseType: 'text'} );
  }

  createTask( formData: any) {
    return this.httpClient.post(this.createtaskUrl , formData);
  }

  getAllCurrentEntries()
  {
      return this.httpClient.get(this.fetchtaskUrl);
  }

  getAllCurrentTasksWithName(taskName: any) {
     return this.httpClient.get(this.fetchcurrenttaskUrl + taskName);
  }
 


}
