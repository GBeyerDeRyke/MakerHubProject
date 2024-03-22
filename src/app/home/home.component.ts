import { Component, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {ScheduleService} from "../services/schedule.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() createPostit: EventEmitter<void> = new EventEmitter<void>();
  @Output() deletePostit: EventEmitter<number> = new EventEmitter<number>();
  schedules: {id : number,text: string }[] = [
    {id:1, text: "Quoi" },
    {id:2, text: "Cou" },
    {id:3, text: "Beh" }];
  nextId: number = 1;
  currentScheduleName: string = "";

  constructor(private router: Router, private scheduleService: ScheduleService) {}


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

  deleteSchedule(id : number) {
    this.schedules.splice(id, 1);
  }


  editScheduleText(index: number) {
    const newText = prompt("Enter new text:");
    if (newText !== null) {
      this.schedules[index].text = newText;
    }
  }

  openSchedule(schedule: {id: number, text: string}) {
    this.scheduleService.updateScheduleName(schedule.text);
    this.router.navigate(['/postit']);
  }
}
