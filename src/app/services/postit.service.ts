import { Injectable } from '@angular/core';
import {Postit} from "../models/postit";

@Injectable({
  providedIn: 'root'
})
export class PostitService {

  postits: Postit[] = [];

  constructor() { }


  updatePostitPosition(id: number, newPosition: { x: number, y: number }) {
    const postit = this.postits.find(p => p.id === id);
    if (postit) {
      postit.x = newPosition.x;
      postit.y = newPosition.y;

    }
  }
}
