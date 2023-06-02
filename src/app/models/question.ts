
import * as _ from 'he';

export class Question {

    constructor(
        category: string,
        type: string,
        difficulty: string,
        question: string,
        correct_answer: string,
        incorrect_answers: string[]
    ) {
        this.category = category;
        this.type = type;
        this.difficulty = difficulty;
        this.question = _.decode(question);
        this.correct_answer = correct_answer;
        this.incorrect_answers = incorrect_answers.map(ans => _.decode(ans));
        this.all_answers = this.shuffleAnswers(incorrect_answers.concat(correct_answer).map(ans => _.decode(ans)));
    }
    public category: string;
    public type: string;
    public difficulty: string;
    public question: string;
    public correct_answer: string;
    public incorrect_answers: string[];
    public all_answers: string[];
    public player_answer: string;

    private shuffleAnswers(answers: string[]) {
        let shuffledAnswers = answers.sort(() => Math.random() - 0.5);
        return shuffledAnswers;
        
    }

}
