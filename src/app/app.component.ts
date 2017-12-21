import { Component, OnInit, Input} from '@angular/core';
import {JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  questionInfo;

   
  
  score: number = 0;
  

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  ngOnInit(){
    this.getDataFromService()
  }

  checkAnswer(answer){
    if(this.questionInfo.answer == answer){
       this.addValueToScore();
     }
    
   this.getDataFromService();


   console.log(this.questionInfo.answer);
   console.log(answer);
   
   console.log(this.score);
 }

 addValueToScore(){
   this.score += this.questionInfo.value;
   
 }


  

  
  }
  








