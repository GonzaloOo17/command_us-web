import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  userName;
  
  constructor() { }

  ngOnInit(): void {

    this.userName=sessionStorage.getItem('name');

  }

}
