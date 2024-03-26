import {Postit} from "./postit";

export interface Schedule {
  id : number;
  title: string;
  postits: Postit[]
}
