import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newjounraluicrt';

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  tasksearchForm: FormGroup = new FormGroup({
    taskName: new FormControl(null, Validators.required),
  });

  appComponentForm: FormGroup = new FormGroup({});

  createtask() {
    this.router.navigateByUrl('createtask');
  }
  listAll() {
    this.router.navigateByUrl('getAllCurrentEntries');
  }

  search() {
    this.router.navigateByUrl('getAllCurrentEntriesWithName/' + this.tasksearchForm.value);
    this.tasksearchForm.reset();
    // this.appComponentForm.reset();]
  }

 


}
