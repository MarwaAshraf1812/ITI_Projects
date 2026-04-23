import { Component, inject, input, Input } from "@angular/core";
import { Task, taskType } from "../../types";
import { NgClass } from "@angular/common";
import { TasksService } from "../../services/tasks.service";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
  imports: [NgClass]
})
export class TaskCard {
  task = input.required<Task>();
  taskService = inject(TasksService);
  
  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }

  selectTask(task: Task) {
    this.taskService.selectTask(task);
  }

  updateTask(id: string, updatedTask: Task) {
    this.taskService.updateTask(id, updatedTask);
  }

  markTaskIsCompleted(id: string) {
    this.taskService.markTaskIsCompleted(id);
  }

 changeStatus(id: string, status: taskType) {
    this.taskService.changeStatus(id, status);
  }
}
