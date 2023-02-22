import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-company-register-company',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})


export class CreateTaskComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient,
    private apiService: ApiService, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  createtaskForm: FormGroup = new FormGroup({
    taskName: new FormControl(null, Validators.required),
    taskDescription: new FormControl(null, Validators.required),
    taskDate: new FormControl(null, Validators.required ),
    createdBy: new FormControl(null, Validators.required)  
  });

  createtask() {
    this.apiService.createTask(this.createtaskForm.value).subscribe(
      (response: any) => {
        this.showSuccess();
        window.location.reload();
      },
      (error) => {
        this.showError();
        window.location.reload();
      }
    );
  }

  showSuccess() {
    this.toastr.success('Task Created Successfully!');
  }

  showError() {
    this.toastr.error('Something went wrong while registration!')
  }

}
