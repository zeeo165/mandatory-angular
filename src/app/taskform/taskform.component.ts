import { Component } from '@angular/core';
import {TaskService} from "../task.service";

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {


  constructor(private taskService: TaskService) {}

  submit(form) {
    this.taskService.addTask(form.value.title, form.value.description);
    //console.log(form.value)
  }
}