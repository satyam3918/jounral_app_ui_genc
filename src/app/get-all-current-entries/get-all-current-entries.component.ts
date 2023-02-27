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

    entriesDetailsList: any = [];
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

    //   tasksearchForm: FormGroup = new FormGroup({
    //     taskName: new FormControl(null, Validators.required),
    //   });
    
    //   search() {
    //     this.router.navigateByUrl('getAllCurrentEntriesWithName/' + this.tasksearchForm.value.taskName);
    //     // this.tasksearchForm.reset();
    //     // this.appComponentForm.reset();
    //   }

  }