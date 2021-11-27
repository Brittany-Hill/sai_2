import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { TestDatabaseComponent } from './test-database/test-database.component';
import { SignedinPageComponent } from './signedin-page/signedin-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EvaluateCourseComponent } from './evaluate-course/evaluate-course.component';
import { EvaluateFacilityComponent } from './evaluate-facility/evaluate-facility.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { TeacherSaiViewComponent } from './teacher-sai-view/teacher-sai-view.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { TeacherViewCardComponent } from './teacher-view-card/teacher-view-card.component'

@NgModule({
  declarations: [
    AppComponent,
    TestDatabaseComponent,
    SignedinPageComponent,
    NavbarComponent,
    EvaluateCourseComponent,
    EvaluateFacilityComponent,
    LandingpageComponent,
    SigninpageComponent,
    ToolbarComponent,
    TeacherViewComponent,
    TeacherSaiViewComponent,
    TeacherViewCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatGridListModule,
    NoopAnimationsModule // Your config
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
