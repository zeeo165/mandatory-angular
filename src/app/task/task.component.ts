import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  cards = this.taskService.cards;
  constructor(private taskService:TaskService) {}

  ngOnInit() {
  }
}