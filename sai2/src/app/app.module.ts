import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { TestDatabaseComponent } from './test-database/test-database.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { TeacherSaiViewComponent } from './teacher-sai-view/teacher-sai-view.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list'

@NgModule({
  declarations: [
    AppComponent,
    TestDatabaseComponent,
    ToolbarComponent,
    LandingPageComponent,
    TeacherViewComponent,
    TeacherSaiViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatGridListModule,
    NoopAnimationsModule // Your config
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
