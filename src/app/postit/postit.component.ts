import { Component } from '@angular/core';
import {Day} from "./Day";


@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrl: './postit.component.css'
})
export class PostitComponent {
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  startOfWeek = 0; // Define startOfWeek at the class level

  create() {
    // Add your logic for the create button action here
    console.log('CREATE button clicked');
  }

  delete() {
    // Add your logic for the delete button action here
    console.log('DELETE button clicked');
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    // Optionally, you can update any data or re-fetch data for the new month
    console.log('Next month button clicked. New month:', this.currentMonth + 1, 'Year:', this.currentYear);
  }

  previousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    // Optionally, you can update any data or re-fetch data for the new month
    console.log('Previous month button clicked. New month:', this.currentMonth + 1, 'Year:', this.currentYear);
  }


  get days(): Day[] {
    return this.getDaysForMonth(this.currentMonth, this.currentYear);
  }

  getDaysForMonth(month: number, year: number): Day[] {
    const days: Day[] = [];
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    for (let date = firstDay; date <= lastDay; date.setDate(date.getDate() + 1)) {
      const day: Day = {
        date: new Date(date),
        name: date.toLocaleDateString('en-US', { weekday: 'long' }),
        isCurrentMonth: date.getMonth() === month,
      };
      days.push(day);
    }
    return days;
  }

  getWeekdays(): string[] {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays.slice(this.startOfWeek, weekdays.length).concat(weekdays.slice(0, this.startOfWeek));
  }

  getWeeks(month: number): Day[][] {
    const days = this.getDaysForMonth(month, this.currentYear);
    const weeks: Day[][] = [];
    let currentWeek: Day[] = [];

    for (const day of days) {
      currentWeek.push(day);
      if (day.date.getDay() === this.startOfWeek || day === days[days.length - 1]) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    return weeks;
  }
}
