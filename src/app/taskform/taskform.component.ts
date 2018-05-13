import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  constructor(private taskService:TaskService) {}

  onClick(title, description) {
    this.taskService.cards.push({
      title,
      description
    }
  );
  console.log(this.taskService.cards);
  }
}