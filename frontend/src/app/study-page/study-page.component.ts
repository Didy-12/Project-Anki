import { Component } from '@angular/core';

interface Flashcard {
  question: string;
  answer: string;
}

interface Lesson {
  title: string;
  flashcards: Flashcard[];
}

@Component({
  selector: 'app-study-page',
  templateUrl: './study-page.component.html',
  styleUrls: ['./study-page.component.css']
})
export class StudyPageComponent {
  lessons: Lesson[] = [
    {
      title: "Physics",
      flashcards: [
        { question: "What is gravity?", answer: "Gravity is a force that attracts objects towards each other." },
        { question: "Who discovered gravity?", answer: "Gravity was discovered by Isaac Newton." },
        // Added new questions
        { question: "What is inertia?", answer: "Inertia is the resistance of any physical object to any change in its velocity." },
        { question: "What is the speed of light?", answer: "The speed of light is approximately 299,792 kilometers per second." }
      ]
    },
    {
      title: "Mathematics",
      flashcards: [
        { question: "What is a prime number?", answer: "A prime number is a number greater than 1 that has no positive divisors other than 1 and itself." },
        { question: "What is the Pythagorean theorem?", answer: "In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides." },
        // Added new questions
        { question: "What is the area of a circle?", answer: "The area of a circle is π times the square of its radius." },
        { question: "What is an integer?", answer: "An integer is a whole number that can be positive, negative, or zero." }
      ]
    }
  ];

  currentLessonIndex: number | null = null;
  currentFlashcardIndex: number = 0;
  showAnswerFlag: boolean = false;

  constructor() {}

  studyLesson(index: number): void {
    this.currentLessonIndex = index;
    this.currentFlashcardIndex = 0;
    this.showAnswerFlag = false;
  }

  getCurrentQuestion(): string {
    if (this.currentLessonIndex !== null) {
      return this.lessons[this.currentLessonIndex].flashcards[this.currentFlashcardIndex].question;
    }
    return '';
  }

  getCurrentAnswer(): string {
    if (this.currentLessonIndex !== null) {
      return this.lessons[this.currentLessonIndex].flashcards[this.currentFlashcardIndex].answer;
    }
    return '';
  }

  showAnswer(): void {
    this.showAnswerFlag = true;
  }

  nextQuestion(): void {
    if (this.currentLessonIndex !== null) {
      if (this.currentFlashcardIndex < this.lessons[this.currentLessonIndex].flashcards.length - 1) {
        this.currentFlashcardIndex++;
        this.showAnswerFlag = false;
      } else {
        // Reset or navigate away after the last question
        this.currentLessonIndex = null;
      }
    }
  }
}
