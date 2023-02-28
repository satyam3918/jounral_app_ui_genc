import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { tasks } from '../tasks';
import { FormControl, FormGroup, SelectControlValueAccessor, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    // styleUrls: ['./history.component.less'],
  })

  export class HistoryTasks implements OnInit{
    LastMonths : any=[];
    TASKNAME_LIST: any = [];
    entriesDetailsList: any = [];
    alert: boolean = false;
    taskName: any;
    monthName: any;
    presentMonth: Number =new Date().getMonth();
   
    selectedMonth: any;
    constructor(private apiService: ApiService) {}
    
    ngOnInit() {

     this.LastMonths = this.getMonthList();
     console.log(this.LastMonths);
   
}
      
//Get 11 previous months and one next month depending on Contract Month and Date.

getMonthList() {

    var monthNames = ["JANUARY","FEBRUARY","MARCH","APRIL", "MAY", "JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
  
    var months : any=[];
    var d = new Date();
    for(var i=0; i<6; i++) {
      d.setMonth(d.getMonth() - 1);
      months.push((monthNames[d.getMonth()])+" "+d.getFullYear());
    };
    d=new Date();
    for(var i=0; i<6; i++) {
        d.setMonth(d.getMonth() + 1);
        months.push((monthNames[d.getMonth()])+" "+d.getFullYear());
      };
    return<any> months;
  }
showHistory(){
    this.selectedMonth = this.monthName.slice(0,3) + this.monthName.slice(-4,);
    return this.apiService.getAllMonthEntriesWithMonthName(this.selectedMonth).subscribe((response: any) => {

        this.entriesDetailsList = response.monthData;
    
    });

}
  }