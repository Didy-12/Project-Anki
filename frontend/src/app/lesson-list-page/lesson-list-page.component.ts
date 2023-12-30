import { Component, OnInit, OnDestroy } from '@angular/core';

interface Flashcard {
  question: string;
  answer: string;
}

interface Lesson {
  title: string;
  flashcards: Flashcard[];
}

@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html',
  styleUrls: ['./lesson-list-page.component.css']
})

export class LessonListPageComponent implements OnInit, OnDestroy {
  lessonTitle: string = '';
  question: string = '';
  answer: string = '';
  lessons: Lesson[] = [];

  constructor() {
    console.log("LessonListPageComponent.constructor()");
  }

  ngOnInit(): void {
    console.log("LessonListPageComponent.ngOnInit()");
  }

  ngOnDestroy(): void {
    console.log("LessonListPageComponent.ngOnDestroy()");
  }

  addLesson(): void {
    if (this.lessonTitle) {
      this.lessons.push({
        title: this.lessonTitle,
        flashcards: []
      });
      this.lessonTitle = '';
    }
  }




  addFlashcard(): void {
    if (this.question && this.answer && this.lessons.length > 0) {
      const lastLesson = this.lessons[this.lessons.length - 1];
      lastLesson.flashcards.push({
        question: this.question,
        answer: this.answer
      });
      this.question = '';
      this.answer = '';
    }
  }
}
