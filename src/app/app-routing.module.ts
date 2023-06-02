import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartQuizComponent } from './components/start-quiz/start-quiz.component';
import { QuestionComponent } from './components/question/question.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';

const routes: Routes = [
  { path: '', 
    component: StartQuizComponent},
  {
    path:'start-quiz',
    component: StartQuizComponent,
  },
  {
    path: 'questions/category/:id',
    component: QuestionComponent,
  },
  {
    path: 'quiz-result',
    component: QuizResultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
