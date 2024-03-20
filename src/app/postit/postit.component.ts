import {Component, Input} from '@angular/core';
import {Day} from '../models/Day';
import {Postit} from "../models/postit";
import {CdkDragMove} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent {
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  startOfWeek = 0; // Define startOfWeek at the class level
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  postits : Postit[] = [];
  @Input() title: string = "";


  create() {
    const postit: Postit = {
      id: -1,
      title: 'Bob',
      description: 'Languleur',
      x: 300,
      y: 300,
      createdMonth: this.currentMonth,
      dateofDay: new Date()
    };
    while (this.postits.find(p => p.id === postit.id)) {
      postit.id--;
    }
    this.postits.push(postit);
    console.log(postit.createdMonth)
  }

  delete(id : number) {
    this.postits = this.postits.filter(p => p.id !== id);
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    console.log('Next month button clicked. New month:', this.currentMonth + 1, 'Year:', this.currentYear);
  }

  previousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    console.log('Previous month button clicked. New month:', this.currentMonth + 1, 'Year:', this.currentYear);
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
        month: this.currentMonth
      };
      days.push(day);
    }
    return days;
  }

  getWeekdays(): string[] {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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

  editTitle(postit: Postit) {
    const newTitle = prompt('Enter new title for the post-it:', postit.title);
    if (newTitle !== null && newTitle !== '') {
      postit.title = newTitle;
    }
  }

  getCurrentMontName(): string {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date().getMonth()];
  }

  onDragMoved(event : CdkDragMove, id : number ){
    const x = event.pointerPosition.x
    const y = event.pointerPosition.y
    let calendar = document.getElementById('calendar')!.getBoundingClientRect();

    const xcalendar = x-calendar.left;
    const ycalendar=y-calendar.top;

    /*console.log(xcalendar)
    console.log(ycalendar)*/

    const largeurCalendar = calendar.width;
    const hauteurCalendar = calendar.height;

    console.log(largeurCalendar)
    console.log(hauteurCalendar)
  }
}
