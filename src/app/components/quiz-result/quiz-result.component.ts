import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizReviewComponent } from '../quiz-review/quiz-review.component';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit, AfterViewInit {

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public quizService: QuizService,
    ) {
  }
  @ViewChild('quizReview', { static: false}) quizReview: QuizReviewComponent;

  questions: any;

  playAgain(): void {
    this.router.navigateByUrl('/start-quiz');
  }

  ngOnInit() {
    console.log(this.quizService.userAnswers);
  }

  ngAfterViewInit(): void {
    this.quizReview.questionList = this.quizService.userAnswers;
  }


  calculatePlayerScore() {
    let total = 0;
    this.quizService.userAnswers.forEach(question => {
      if(question.player_answer === question.correct_answer) total+=10;
      else total-=5;
    })
    return total;
  }


}
