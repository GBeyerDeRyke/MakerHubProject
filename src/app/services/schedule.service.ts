import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private selectedSchedule = new BehaviorSubject<string>('');
  currentSchedule = this.selectedSchedule.asObservable();

  constructor() { }

  updateScheduleName(name: string) {
    this.selectedSchedule.next(name);
  }
}
