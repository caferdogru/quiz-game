import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Category } from 'src/app/models/category';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  constructor(
    public quizService: QuizService,
  ) {

  }

  categories: Category[];
  selectedCategory: Category;

  ngOnInit() {
    this.quizService.getCategories().subscribe(res => {
      this.categories = res.trivia_categories;
    })
  }


  getCategoryQuestions(category:Category) {
    this.quizService.getQuestions(category.id, 10).subscribe(res => {
    })
  }

}
