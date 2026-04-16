import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, taskType } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
  templateUrl: './taskCard.html',
  styleUrl: './taskCard.css',
  imports: [CommonModule]
})
export class TaskCardComponent {
  @Input() task!: Task;

@Output() taskUpdated = new EventEmitter<Task>();

changeType(newType: string) {
  this.task.type = newType as taskType;
  this.taskUpdated.emit(this.task);
  console.log('Task Updated:', this.task);
}


  getBadgeClass(): string {
    if (!this.task) return '';
    switch (this.task.type) {
      case 'To Do': return 'todo';
      case 'In Progress': return 'in-progress';
      case 'Done': return 'done';
      default: return '';
    }
  }
}
