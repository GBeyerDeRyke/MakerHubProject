import { Component } from '@angular/core';
import {ScheduleService} from "../services/schedule.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedScheduleName: string = ''; // Declare selectedScheduleName property

  constructor(private scheduleService: ScheduleService) {
    this.scheduleService.currentSchedule.subscribe((scheduleName) => {
      this.selectedScheduleName = scheduleName;
    });
  }
}
