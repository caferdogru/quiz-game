import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    ) {
    this.route.params.subscribe( param => {
      // this.questions = param.get('questions');    
      console.log(param);
      console.log(this.questions);
    });
  }
  
  questions: any;

  playAgain(): void {
    this.router.navigateByUrl('/start-quiz');
  }

  ngOnInit() {
  }



}
