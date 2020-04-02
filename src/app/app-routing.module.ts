import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '', redirectTo:'student', pathMatch:'full'
  },
  {
    path: 'student', component:StudentComponent
  },
  {
    path: 'studentdetails', component:StudentdetailsComponent
  },
  {
    path: '**', component:PagenotfoundComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
