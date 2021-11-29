import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluateCourseComponent } from './evaluate-course/evaluate-course.component';
import { EvaluateFacilityComponent } from './evaluate-facility/evaluate-facility.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignedinPageComponent } from './signedin-page/signedin-page.component';
import { TestDatabaseComponent } from './test-database/test-database.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { AuthenticationService } from 'src/services/auth.service';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { TeacherSaiViewComponent } from './teacher-sai-view/teacher-sai-view.component';
const routes: Routes = [
  {path: '', redirectTo: 'landingpage', pathMatch: 'full'},
  {path: 'test', component: TestDatabaseComponent},
  {path: 'signedin', component: SignedinPageComponent, canActivate: [AuthenticationService]},
  {path: 'evaluate-course', component: EvaluateCourseComponent, canActivate: [AuthenticationService]},
  {path: 'evaluate-facility', component: EvaluateFacilityComponent,canActivate: [AuthenticationService]},
  {path: 'landingpage', component: LandingpageComponent},
  {path: '*/*', redirectTo: 'landingpage'},
  {path: 'teacher-view', component: TeacherViewComponent},
  {path: 'teacher-sai-view', component: TeacherSaiViewComponent},
  {path: 'signinpage', component: SigninpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
