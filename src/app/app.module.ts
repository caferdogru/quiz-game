import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { StartQuizComponent } from './components/start-quiz/start-quiz.component';
import { QuestionComponent } from './components/question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerComponent, NgxSpinnerModule } from 'ngx-spinner';
import { QuizReviewComponent } from './components/quiz-review/quiz-review.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';

@NgModule({
  declarations: [
    AppComponent,
    StartQuizComponent,
    QuestionComponent,
    QuizReviewComponent,
    QuizResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  exports: [
    QuizReviewComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
