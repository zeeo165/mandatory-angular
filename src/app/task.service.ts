import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { Task, StatusType } from './constants';

export class TaskService {
  
  cards = [
    {
      title: 'banana',
      description: 'can play garrys mod'
    },
    {
      title: 'pizza',
      description: 'can play mount and blade warband'
    },
  ]
}
