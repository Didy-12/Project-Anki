import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

//Ajouter chaque page créée, avec le component puis le lien
import {LessonEditFormComponent} from "./lesson-edit-form/lesson-edit-form.component";
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
import {LessonDetailPageComponent} from "./lesson-detail-page/lesson-detail-page.component";
import {LoginComponent} from "./login/login.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {StudyPageComponent} from "./study-page/study-page.component";

//import {LessSearchPageComponent} from './less-search-page/less-search-page.component';

const routes: Routes = [
  //
  {path:'lesson-edit-form', component: LessonEditFormComponent},
  {path:'lesson-list-page', component: LessonListPageComponent},
  {path: 'lesson-detail-page', component: LessonDetailPageComponent},
  {path: 'lesson/:id', component: LessonDetailPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  { path: 'study-page', component: StudyPageComponent },




  //{ path:'less-search-page', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true}), NgbModule],
  //bootstrap: [AppComponent]
  exports: [RouterModule]
})
export class AppRoutingModule { }
