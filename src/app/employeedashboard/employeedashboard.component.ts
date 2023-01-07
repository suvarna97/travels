import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.scss']
})
export class EmployeedashboardComponent implements OnInit {
  userform = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }
today=Date.now();
decimal=44433.567234
}
