import {Postit} from "./postit";

export interface Day {
  date: Date;
  name: string;
  isCurrentMonth?: boolean;
  month: number
}
