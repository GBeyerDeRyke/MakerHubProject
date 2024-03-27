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
  nextId: number = 1;


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
    let allPostit : Postit[] = this.getAllPostit()
    let id =1;
    while (allPostit.find(p => p.id === id)) {
      id++;
    }
    return id
  }

  updatePostitPosition(id: number, newPosition: { x: number, y: number }, newDate : Date) {
    const postit = this.findPostitById(id)
    if (postit) {
      postit.x = newPosition.x;
      postit.y = newPosition.y;
      postit.dateofDay = newDate
    }
  }

  findPostitById(idPostit : number): Postit|undefined{
    let postits = this.getAllPostit()
    return postits.find(p => p.id === idPostit)
  }

  private getAllPostit(): Postit[] {
    let allPostit : Postit[] = [];
    this.schedules.forEach(e => e.postits.forEach(p=> allPostit.push(p)));
    return allPostit;
  }

  getAllPostitBySchedule(idSchedule : number): Postit[]|undefined{
    return this.schedules.find(p => p.id === idSchedule)?.postits
  }

  // Schedules----------------------------------------------------

  createSchedule() {
    const text = prompt("Enter schedule text:");
    if (text !== null) {
      const schedule = {
        id: this.nextId++,
        text: text
      };
      this.schedules.push(schedule);
    }
  }

  editScheduleText(index: number) {
    const newText = prompt("Enter new text:");
    if (newText !== null) {
      this.schedules[index].text = newText;
    }
  }

  deleteSchedule(id : number) {
    this.schedules.splice(id, 1);
  }


  openSchedule(schedule: {id: number, text: string}) {
    this.scheduleService.updateScheduleName(schedule.text);
    this.router.navigate(['/postit']);
  }
}
