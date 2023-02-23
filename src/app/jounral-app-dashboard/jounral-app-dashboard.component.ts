import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jounral-app-dashboard',
  templateUrl: './jounral-app-dashboard.component.html',
  styleUrls: ['./jounral-app-dashboard.component.css']
})
export class JounralAppDashboardComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}