import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { tasks } from '../tasks';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'get-by-name',
  templateUrl: './get-by-name.component.html',
  styleUrls: ['./get-by-name.component.css']
})
export class GetbyNameComponent implements OnInit {

    taskName!: any;

    taskDetails: tasks = new tasks;
    entriesDetailsList: any = [];

    constructor(private router: Router, private httpClient: HttpClient,
        private apiService: ApiService, private route: ActivatedRoute) {
      }
    
      //for request param
      ngOnInit() {
    
        this.route.paramMap.subscribe((res: ParamMap) => {
          this.taskName = res.get('taskName');
        });
        
        return this.apiService.getAllCurrentTasksWithName(this.taskName).subscribe((response: any) => {

            this.entriesDetailsList = response.monthData;
        //   this.taskDetails.taskName = response.taskName;
        //   this.taskDetails.taskDescription = response.taskDescription;
        //   this.taskDetails.taskDate = response.taskDate;
        //   this.taskDetails.createdBy = response.createdBy;
        //   this.taskDetails.createdTs = response.createdTs;
        //   this.taskDetails.updatedBy = response.updatedBy;
        //   this.taskDetails.updatedTs = response.updatedTs;
        });
    
      }


}