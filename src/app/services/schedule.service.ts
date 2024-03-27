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
    console.log(idSchedule)
    let schedudule = this.schedules.find(s => s.id == idSchedule)
    console.log(schedudule)
    if(schedudule){
      schedudule.postits.push(postit)
    }
  }

  deletePostit(scheduleId: number, postId: number) {
    const schedule = this.getScheduleById(scheduleId);
    if (schedule) {
      schedule.postits = schedule.postits.filter(postit => postit.id !== postId);
    }
  }

  private findNextPostitId():number{
    let allPostit : Postit[] = this.getAllPostit()
    let id =1;
    while (allPostit.find(p => p.id == id)) {
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
    return postits.find(p => p.id == idPostit)
  }

  private getAllPostit(): Postit[] {
    let allPostit : Postit[] = [];
    this.schedules.forEach(e => e.postits.forEach(p=> allPostit.push(p)));
    return allPostit;
  }

  getAllPostitBySchedule(idSchedule : number): Postit[]|undefined{
    return this.schedules.find(p => p.id == idSchedule)?.postits
  }

  editTitle(id:number,text:string){
    let postitTemp = this.findPostitById(id)
    if(postitTemp)
      postitTemp.title = text
  }

  // Schedules----------------------------------------------------

  createSchedule() {
    const text = prompt("Enter schedule text:");
    if (text !== null) {
      const schedule = {
        id: this.nextId++,
        title: text,
        postits: []
      };
      this.schedules.push(schedule);
    }
  }

  editScheduleText(id: number, title: string) {
  let scheduleToUpdate = this.getScheduleById(id);
  if(scheduleToUpdate)
    scheduleToUpdate.title = title;
  }

  getScheduleById(id:number){
    console.log(this.schedules)
    return this.schedules.find(p => p.id == id)
  }

  deleteSchedule(id: number) {
    const index = this.schedules.findIndex(schedule => schedule.id === id);
    if (index !== -1) {
      this.schedules.splice(index, 1);
    }
  }

  updateScheduleName(name: string) {
    this.selectedSchedule.next(name);
  }

}
