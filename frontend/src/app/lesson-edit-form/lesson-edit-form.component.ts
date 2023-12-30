import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserSettingsService} from "../user-settings.service";
//import { faHome } from '@fortawesome/free-solid-svg-icons';


 @Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})
export class LessonEditFormComponent {
   //new
   stringArray: string[] = [""];
   i: number = 0;
   //new
  constructor(private router: Router, private userSettingsService:UserSettingsService) {}
  onClickSubmit() {
    this.userSettingsService.lastLessonId = 1234;

    // could execute code (send save request to server)... then navigate
    this.router.navigate(['lesson-list-page']).then(res => {})
  }


}




