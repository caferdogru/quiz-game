import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.css']
})
export class QuizReviewComponent implements OnInit {

  constructor() { }

  questions: Question[];
  activeQuestion: Question;
  activeQuestionIndex = 0;

  @Input() set questionList(questions: Question[])  {
    this.questions = questions;
    this.activeQuestion = questions[0];
  }


  ngOnInit() {

  }

  previousQuestion(): void {
    this.activeQuestionIndex = this.activeQuestionIndex !== 0 ? this.activeQuestionIndex-1 : this.questions.length-1;
    this.activeQuestion = this.questions[this.activeQuestionIndex];
  }

  nextQuestion(): void {
    this.activeQuestionIndex = this.activeQuestionIndex < this.questions.length - 1 ? this.activeQuestionIndex+1 : 0;
    this.activeQuestion = this.questions[this.activeQuestionIndex];
  }

  decideButtonClass(answer: string){
    if(answer === this.activeQuestion.correct_answer) {
      return 'correct-answer-btn';
    } else if(this.activeQuestion.incorrect_answers.indexOf(answer) > -1 && answer === this.activeQuestion.player_answer)  {
      return 'incorrect-answer-btn'
    }
    return '';
  }

  

}
