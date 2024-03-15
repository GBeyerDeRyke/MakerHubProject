import { Component, Output, EventEmitter } from '@angular/core';
import {PostitComponent} from "../postit/postit.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() createPostit: EventEmitter<void> = new EventEmitter<void>();
  @Output() deletePostit: EventEmitter<void> = new EventEmitter<void>();

  postits: PostitComponent[] = [];
  constructor(private router: Router) {} // Inject Router service

  createSchedule() {
    /*const postit = new PostitComponent(); // Create a new instance of PostitComponent
    this.postits.push(postit); // Add it to the array of postits*/
  }

  deleteSchedule(index: number) {
    this.postits.splice(index, 1); // Remove the postit at the given index
  }

  openPostit(postit: PostitComponent) {
    // Navigate to the postit component
    this.router.navigate(['/postit']);
  }
}
