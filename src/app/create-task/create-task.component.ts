import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
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
    private apiService: ApiService, private toastr: ToastrService, private formBuilder: FormBuilder) {
  }


  ngOnInit() {
  }

  createtaskForm: FormGroup = new FormGroup({
    taskName: new FormControl(null, Validators.required),
    taskDescription: new FormControl(null, Validators.required),
    taskDate: new FormControl(null, Validators.required ),
    createdBy: new FormControl(null, Validators.required)  
  });



//   myForm() {
//     this.createtaskForm = this.fb.group({
//     taskName: ['', Validators.required ]
//     });
//  }
   
  createtask() {
    this.apiService.createTask(this.createtaskForm.value).subscribe(
      (response: any) => {
        this.showSuccess();
        // window.location.reload();
      },
      (error) => {
        this.showError();
        // window.location.reload();
      }
    );

    
    if(this.createtaskForm.valid){
      console.log('task created created sucessfully')
    }
    else{
      this.createtaskForm = this.formBuilder.group({
        taskName: [null, Validators.required],
        taskDescription: [null, Validators.required],
        createdBy: [null, Validators.required]
      });
    }
  }

  // onSubmit() {
  //   if (this.createtaskForm.valid) {
  //     console.log('form submitted');
  //   } else {
  //     // validate all form fields
  //   }
  // }

  showSuccess() {
    this.toastr.success('Task Created Successfully!');
  }

  showError() {
    this.toastr.error('Something went wrong while registration!')
  }



}
