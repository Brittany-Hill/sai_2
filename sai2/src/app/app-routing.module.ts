import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDatabaseComponent } from './test-database/test-database.component';
const routes: Routes = [
  {path:'', redirectTo: 'test', pathMatch: 'full'},
  {path: 'test', component: TestDatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
