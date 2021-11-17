import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDatabaseComponent } from './test-database/test-database.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { TeacherSaiViewComponent } from './teacher-sai-view/teacher-sai-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'test', component: TestDatabaseComponent},
  {path: 'teacher-view', component: TeacherViewComponent},
  {path: 'teacher-sai-view', component: TeacherSaiViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
