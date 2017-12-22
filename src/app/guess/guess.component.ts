import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {

  constructor() { }

  //scoring
  answer: string;
  score: number = 0;

  @Input() questionInfo;

  @Output() buttonClicked = new EventEmitter();

  ngOnInit() {
  }

  checkAnswer(){

    if(this.questionInfo.answer.toLowerCase() == this.answer.toLowerCase()){
      this.score += this.questionInfo.value;
     }
     this.answer = "";
     this.buttonClicked.emit();
  }

}
