export class Game {
  type: 'qcm' | 'pictures';
  questions: any[] = [];
  phase: string = 'ready';
  currentQuestion: any;
  currentQuestionIndex: number = 0;
  answered: boolean[] = [];
  timer: number;
  score: number = 0;
  combo: number = 0;

  constructor(
    type: 'qcm' | 'pictures',
    timer: number
  ) {
    this.type = type;
    this.timer = timer * 100;
  }
}
