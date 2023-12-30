import { Component } from '@angular/core';

@Component({
  selector: 'app-less-search-page',
  templateUrl: './less-search-page.component.html',
  styleUrls: ['./less-search-page.component.css']
})
export class LessSearchPageComponent {
  advancedMode: boolean = false;

  performSearch() {
    // Add logic to perform the search based on the entered criteria
    console.log('Search performed!');
  }


}
