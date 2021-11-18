import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { TestDatabaseComponent } from './test-database/test-database.component';
import { SignedinPageComponent } from './signedin-page/signedin-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EvaluateCourseComponent } from './evaluate-course/evaluate-course.component';
import { EvaluateFacilityComponent } from './evaluate-facility/evaluate-facility.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SigninpageComponent } from './signinpage/signinpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDatabaseComponent,
    SignedinPageComponent,
    NavbarComponent,
    EvaluateCourseComponent,
    EvaluateFacilityComponent,
    LandingpageComponent,
    SigninpageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig) // Your config
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
