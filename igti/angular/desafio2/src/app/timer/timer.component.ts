import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() exercises: Exercise[] = [];

  currentEx: number;
  currentRep: number;
  phase: number;
  timeLeft: number;
  interval: number;


  ngOnInit(): void {
    this.restart();
  }
  restart(){
    this.currentEx = 0;
    this.currentRep = 0;
    this.phase = 0;
    const ex = this.exercises[this.currentEx];
    this.timeLeft = this.getTimeOfCurrentPhase();
  }
  formaPhase(phase: number){
    switch (phase) {
      case 0:
        case 0: return 'Preparação';
        case 1: return 'Exercício';
        case 2: return 'Descanso';
        break;

      default:
        break;
    }
  }

    formatTimeLeft(time: number){
      return (time / 10).toString();
    }

  next(){
    if (this.phase < 2) {
      this.phase++;
    }
    else{
      const ex = this.exercises[this.currentEx];
      if (this.currentRep < ex.repetitions - 1) {
        this.currentRep++;
        this.phase = 1;
      } else{
        if (this.currentEx < this.exercises.length - 1){
          this.currentEx++;
          this.currentRep = 0;
          this.phase = 0;
        } else{
          return;
        }
      }
    }
    this.timeLeft = this.getTimeOfCurrentPhase();
  }
  getTimeOfCurrentPhase(){
    const ex = this.exercises[this.currentEx];
    switch (this.phase) {
      case 0:
        case 0: return ex.preparation * 10;
        case 1: return ex.duration * 10;
        case 2: return ex.rest * 10;
    }

  }
  start(){
    if (!this.interval){
    this.interval = setInterval(() => {
      if (this.timeLeft > 0){
        this.timeLeft--;
      }
      console.log('interval');
    }, 100);
  }
  }

  pause(){
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }
  ngOnDestroy(){
    this.pause();
  }
}
