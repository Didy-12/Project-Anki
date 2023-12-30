import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessSearchPageComponent } from './less-search-page/less-search-page.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {HttpClientModule} from "@angular/common/http";
import {StudyPageComponent} from "./study-page/study-page.component";

@NgModule({
  declarations: [
    AppComponent,
    LessonEditFormComponent,
    LessSearchPageComponent,
    LessonListPageComponent,
    LessonDetailPageComponent,
    LoginComponent,
    InscriptionComponent,
    StudyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
