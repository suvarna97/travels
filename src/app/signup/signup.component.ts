import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import {FormGroup,FormBuilder, FormControl}  from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm  :FormGroup
  // signupForm:any;
  | any

  
  constructor(private fb:FormBuilder,private http: HttpClient,private router: Router) { }
 
  ngOnInit(): void {
    
  this.signupForm =this.fb.group({
    fullname:[''],
    email:[''],
    password:[''],
    mobilenumber:['']
  })
  
  

  }

  signup(){
    this.http.post<any>('http://localhost:3000/student/',this.signupForm.value)
    .subscribe(res=>{
      alert("signup successfull");
      this.signupForm.reset()
      this.router.navigate(['login']);
    },err=>{
      alert("something went wrong")
    })
  }
}
