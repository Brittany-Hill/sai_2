import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignedinPageComponent } from './signedin-page/signedin-page.component';
import { TestDatabaseComponent } from './test-database/test-database.component';
const routes: Routes = [
  //{path:'', redirectTo: 'test', pathMatch: 'full'},
  {path: 'test', component: TestDatabaseComponent},
  {path: 'signedin-page', component: SignedinPageComponent},
  {path: '**', redirectTo: 'signedin-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
