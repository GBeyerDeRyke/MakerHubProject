import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Postit} from "../models/postit";
import {Schedule} from "../models/schedule";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private selectedSchedule = new BehaviorSubject<string>('');
  currentSchedule = this.selectedSchedule.asObservable();
  schedules: Schedule[] = [];


  constructor() { }

  updateScheduleName(name: string) {
    this.selectedSchedule.next(name);
  }

  createPostit(idSchedule : number, currentMonth: number ){
    const postit: Postit = {
      id: this.findNextPostitId(),
      title: 'Bob',
      description: 'Languleur',
      x: 500,
      y: 500,
      createdMonth: currentMonth,
      dateofDay: new Date()
    };
    let schedudule = this.schedules.find(s => s.id === idSchedule)
    if(schedudule){
      schedudule.postits.push(postit)
    }
  }

  private findNextPostitId():number{
    let allPostit : Postit[] = []
    let id =1;
    this.schedules.forEach(e => e.postits.forEach(p=> allPostit.push(p)))
    while (allPostit.find(p => p.id === id)) {
      id++;
    }
    return id
  }
}
