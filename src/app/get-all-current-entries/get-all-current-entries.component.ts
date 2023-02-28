import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { tasks } from '../tasks';
import { FormControl, FormGroup, SelectControlValueAccessor, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'get-all-current-entries',
    templateUrl: './get-all-current-entries.component.html',
    styleUrls: ['./get-all-current-entries.component.css']
  })
  export class GetAllCurrentEntries implements OnInit {

    taskName: any ;
    entriesDetailsList: any = [];
    entriesDetailsListByName: any = [];
    
    constructor(private router: Router, private httpClient: HttpClient, private apiService: ApiService,
        private route: ActivatedRoute, private toastr: ToastrService) { }
    

      ngOnInit() {
    
        return this.apiService.getAllCurrentEntries().subscribe((response: any) => {
        //   for (const res of response.monthdata) {
            this.entriesDetailsList = response.monthData;
        //   }
        console.log(response);
        });
      }

    //   taskDropdown: FormGroup = new FormGroup({
    //     taskName: new FormControl(null, Validators.required),
    //   });
    
      searchTaskName() {
        console.log(this.taskName);
        
        // this.route.paramMap.subscribe((res: ParamMap) => {
        //     this.taskName = res.get('taskName');
        // });
        // return this.apiService.getAllCurrentTasksWithName(this.taskName).subscribe((response: any) => {
 
            this.router.navigateByUrl('getAllCurrentEntriesWithName/' + this.taskName.taskName);
        // this.entriesDetailsListByName.push(this.taskName);

        //     return this.entriesDetailsListByName;
        //   this.taskDetails.taskName = response.taskName;
        //   this.taskDetails.taskDescription = response.taskDescription;
        //   this.taskDetails.taskDate = response.taskDate;
        //   this.taskDetails.createdBy = response.createdBy;
        //   this.taskDetails.createdTs = response.createdTs;
        //   this.taskDetails.updatedBy = response.updatedBy;
        //   this.taskDetails.updatedTs = response.updatedTs;

        
        
        
        // this.router.navigateByUrl('getAllCurrentEntriesWithName/' + this.taskDropdown.value.taskName);
        // this.tasksearchForm.reset();
        // this.appComponentForm.reset();
      }
    

  }