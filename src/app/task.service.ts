import {BehaviorSubject} from 'rxjs';
import {Observable} from "rxjs/Observable";
import {Task, StatusType} from './constants';
import 'rxjs/add/operator/map';

export class TaskService {

  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject
  private taskId = 2;
  private taskObjects: Task[] = [
    {
      id: 1,
      status: StatusType.NotStarted,
      title: 'banana',
      description: 'can play garrysmod'
    },
    {
      id: 2,
      status: StatusType.NotStarted,
      title: 'pizza',
      description: 'can play mount adn blade warband'
    }
  ];

  
  private subject = new BehaviorSubject(this.taskObjects);
  
    getTasks(status: StatusType): Observable<Task[]> {
      // return an observable of a task array, filtered by the passed in status...
      return this.subject.asObservable()
        .map(tasks => tasks.filter(
          task => task.status === status
        ))
    }
  
    updateTask(id: number, status: StatusType) {
      this.updateSubscribers();
    }
  
    addTask(title: string, description: string) {
      // complete the code to add a task...
      this.taskObjects.push({
        id: ++this.taskId,
        status: StatusType.NotStarted,
        title,
        description
      });
      this.updateSubscribers()
    }
  
    updateSubscribers() {
      this.subject.next(this.taskObjects);
    }  