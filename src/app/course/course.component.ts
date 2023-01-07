import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
course :any[]=[
 {id:1,name:'Learn Angular',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis neque nihil asperiores est dignissimos debitis.', 'image':'../../assets/angular-logo.webp'},
{id:1,name:'Learn Typescript',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis neque nihil asperiores est dignissimos debitis.', 'image':'../../assets/Typescript.png'},
{id:1,name:'Learn Javascript',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis neque nihil asperiores est dignissimos debitis.', 'image':'../../assets/javascript.jpg'},
{id:1,name:'Learn React',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias blanditiis neque nihil asperiores est dignissimos debitis.', 'image':'../../assets/react.jpg'}
]


}
