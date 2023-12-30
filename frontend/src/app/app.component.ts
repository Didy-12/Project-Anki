import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {LessonEditFormComponent} from "./lesson-edit-form/lesson-edit-form.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TD3_Angul';
  //stringArray: string[] = [""];
  //i: number = 0;

  advancedMode: boolean = false;

  performSearch() {
    // Add logic to perform the search based on the entered criteria
    console.log('Search performed!');
  }

  constructor() {
    console.log('AppComponent.constructor()')
  }

  ngOnInit() {
    console.log('AppComponent.ngOnInit()')
  }
}




