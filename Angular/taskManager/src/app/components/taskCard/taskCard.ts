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
  @Output() taskDeleted = new EventEmitter<string>();
  @Output() taskEdit = new EventEmitter<Task>();

  changeType(newType: string) {
    this.task.type = newType as taskType;
    if (this.task.type === 'Done') {
      this.markIsCompleted();
    }
    console.log('Task Updated:', this.task);
  }

  deleteTask() {
    this.taskDeleted.emit(this.task.id);
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

  markIsCompleted() {
    this.task.isCompleted = true;
    this.task.type = 'Done';
    this.taskUpdated.emit(this.task);
    console.log('Task Updated:', this.task);
  }

  editTask() {
    this.taskEdit.emit(this.task);
  }
}
