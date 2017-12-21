import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {

  constructor() { }

  @Input() answer: string;

  @Output() buttonClicked = new EventEmitter();

  ngOnInit() {
  }

  youClickedMe(){
    this.buttonClicked.emit(this.answer);
  }

}
