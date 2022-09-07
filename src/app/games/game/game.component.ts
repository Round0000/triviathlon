import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/questions.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { Game } from 'src/app/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('gamePhaseTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class GameComponent implements OnInit {
  // game = new Game('QCM', 30);
  game = new Game('qcm', 30);

  constructor(public questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.game.questions = this.questionsService.getQuestions(this.game.type);
  }

  startTimer() {
    const interval = setInterval(() => {
      this.game.timer--;

      if (this.game.timer === 0) {
        clearInterval(interval);
        this.game.phase = 'over';
      }
    }, 10);
  }

  setNewQuestion() {
    this.game.currentQuestion =
      this.game.questions[this.game.currentQuestionIndex];
  }

  startGame() {
    this.setNewQuestion();
    setTimeout(() => {
      // this.startTimer();
    }, 300);
    this.game.phase = 'running';
  }

  endGame() {
    this.game.phase = 'over';
  }

  tryAnswer(a: string) {
    const result = this.game.currentQuestion.answer === a;
    this.game.answered.push(result);

    if (result === true) {
      if (this.game.combo >= 3) {
        this.game.score += 5;
      } else {
        this.game.score += 3;
      }
      this.game.combo += 1;
    } else {
      this.game.score -= 1;
      this.game.combo = 0;
    }

    if (this.game.currentQuestionIndex < this.game.questions.length - 1) {
      this.game.currentQuestionIndex++;
      this.setNewQuestion();
    } else {
      this.endGame();
    }
  }
}
