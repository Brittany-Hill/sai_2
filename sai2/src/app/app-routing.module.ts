import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluateCourseComponent } from './evaluate-course/evaluate-course.component';
import { EvaluateFacilityComponent } from './evaluate-facility/evaluate-facility.component';
import { SignedinPageComponent } from './signedin-page/signedin-page.component';
import { TestDatabaseComponent } from './test-database/test-database.component';
const routes: Routes = [
  //{path:'', redirectTo: 'test', pathMatch: 'full'},
  {path: 'test', component: TestDatabaseComponent},
  {path: 'signedin-page', component: SignedinPageComponent},
  {path: 'evaluate-course', component: EvaluateCourseComponent},
  {path: 'evaluate-facility', component: EvaluateFacilityComponent},
  {path: '**', redirectTo: 'landingpage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
