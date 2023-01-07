import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {path :'',component:HomeComponent},
  // {path : 'about',component:AboutComponent},
  // {path :'course',component :CourseComponent},
  // {path :'joinnow',component :JoinnowComponent},
  // {path:'',redirectTo:'login',pathMatch:'full'},
  // {path: 'login',component : LoginComponent},
  // {path:'signup',component: SignupComponent},
  // {path:'dashboard',component: EmployeedashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
