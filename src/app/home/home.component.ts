import { Component, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {ScheduleService} from "../services/schedule.service";
import {MatDialog} from "@angular/material/dialog";
import {Schedule} from "../models/schedule";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() createPostit: EventEmitter<void> = new EventEmitter<void>();
  @Output() deletePostit: EventEmitter<number> = new EventEmitter<number>();
  schedules: Schedule[] = []



  constructor(private router: Router, private scheduleService: ScheduleService, private dialog: MatDialog) {
    this.schedules = scheduleService.schedules
  }

  createSchedule() {
   this.scheduleService.createSchedule()
  }

  editScheduleText(index: number) {
    const newText = prompt("Enter new text:");
    if (newText !== null) {
     this.scheduleService.editScheduleText(index,newText)
    }
  }

  deleteSchedule(id : number) {
    this.scheduleService.deleteSchedule(id)
  }


  openSchedule(id : number) {
    this.scheduleService.updateScheduleName(this.scheduleService.getScheduleById(id)!.title);
    this.router.navigate(['/postit/'+ id]);
  }
}
