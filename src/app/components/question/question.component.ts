import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuizService } from 'src/app/services/quiz.service';
import { animation, style, transition} from '@angular/animations';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {

  loading: boolean = false;


  constructor(
    public route: ActivatedRoute,
    public quizService: QuizService,
    public router: Router
  ) {

  }

  questionCount: number = 10;
  questions: Question[] = [];
  activeQuestion: Question;
  activeQuestionIndex:number = 0;
  totalPoints: number = 0;
  timer: number = 10;

  getCategoryQuestions(categoryId: number) {
    this.quizService.getQuestions(categoryId, 10).subscribe(res => {
      this.loading = true;
      res.results.forEach((item: { category: string; type: string; difficulty: string; question: string; correct_answer: string; incorrect_answers: string[]; }) => {
        let question = new Question(item.category, item.type, item.difficulty, item.question, item.correct_answer, item.incorrect_answers);
        this.questions.push(question);
      })
      this.activeQuestion = this.questions[0];
    })
    this.loading = false;
  }


  changeQuestion(event?: any) {
    this.timer = 10;
    if(event) this.checkAnswer(event);
    this.activeQuestionIndex += 1;
    this.activeQuestion = this.questions[this.activeQuestionIndex + 1];
    if (this.activeQuestionIndex === this.questions.length - 1) {
      this.quizService.userAnswers = this.questions;
      this.router.navigate(["/quiz-result"], {queryParams: { questions: this.questions}});
    }




  }


  checkAnswer(event: any): void {
    if (event.target) {
      const playerAnswer = event.target.innerHTML.trim();
      this.activeQuestion.player_answer = playerAnswer;
      if (playerAnswer === this.activeQuestion.correct_answer) {
        this.totalPoints += 10;
      } else {
        this.totalPoints -= 5;
      }
    }

  }


  playClockTickingSound() {
    if(this.timer <= 25) {
      let audio = new Audio();
      audio.src = "../../../assets/audio/clock-ticking.mp3";
      audio.load();
      audio.play();
    }
  }

  ngOnInit() {
    const categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCategoryQuestions(categoryId);

    setInterval(() => {
      this.timer -= 1;
      if(this.timer === -1) this.changeQuestion();
    }, 1000);
    // this.playClockTickingSound();

  }

}
