import { Component, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {Schedule} from "../models/schedule";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() createPostit: EventEmitter<void> = new EventEmitter<void>();
  @Output() deletePostit: EventEmitter<number> = new EventEmitter<number>();
  schedules: {id : number,text: string }[] = [];
  nextId: number = 1;

  constructor(private router: Router) {}

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

  openPostit(schedule: { id: number }) {
    this.router.navigate(['/postit']);
  }


}
