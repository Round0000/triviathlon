import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/questions.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-speed-qcm',
  templateUrl: './speed-qcm.component.html',
  styleUrls: ['./speed-qcm.component.scss'],
  animations: [
    trigger('gamePhaseTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
    trigger('answerAddedTrigger', [
      transition(':enter', [
        style({ flex: 0 }),
        animate('300ms', style({ flex: 1 })),
      ]),
    ]),
  ],
})
export class SpeedQcmComponent implements OnInit {
  questions: any = [];
  currentQuestionIndex: number = 0;
  currentQuestion: any;
  answered: any = [];
  timer: number = 3000;
  score: number = 0;
  gameRunning: boolean = false;
  gameOver: boolean = false;

  constructor(public questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questions = this.questionsService.getQuestions();
  }

  startTimer() {
    const interval = setInterval(() => {
      this.timer--;

      if (this.timer === 0 || this.gameOver) {
        clearInterval(interval);
        this.gameOver = true;
      }
    }, 10);
  }

  setNewQuestion() {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  startGame() {
    this.setNewQuestion();
    setTimeout(() => {
      this.startTimer();
    }, 300)
    this.gameRunning = true;
  }

  endGame() {
    this.gameRunning = false;
    this.gameOver = true;
  }

  tryAnswer(a: string) {
    if (this.gameOver) return;

    const result = this.currentQuestion.answer === a;
    this.answered.push(result);

    if (result === true) {
      this.score += 3;
    } else {
      this.score -= 1;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.setNewQuestion();
    } else {
      this.endGame();
    }
  }
}
