import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    public httpCient: HttpClient
  ) {

  }

  baseRoute: string = 'https://opentdb.com/';
  userAnswers: Question[];


  getCategories() {
    return this.httpCient.get<any>(this.baseRoute + 'api_category.php', { responseType: 'json', observe: 'body' });
  }


  getQuestions(categoryId: number, amount: number) {
    const params = new HttpParams()
      .append('category', categoryId)
      .append('amount', amount);
    return this.httpCient.get<any>(this.baseRoute + 'api.php', { responseType: 'json', observe: 'body', params: params});
  }


}
