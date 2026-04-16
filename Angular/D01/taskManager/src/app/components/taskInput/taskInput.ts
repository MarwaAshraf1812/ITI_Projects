import { Component, EventEmitter, Output } from '@angular/core';
import { Task, error } from '../../types';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [],
  templateUrl: './taskInput.html',
  styleUrl: './taskInput.css'
})
export class TaskInputComponent {
  @Output() sendTasks = new EventEmitter<Task>();
  selectedPriority: string = 'medium';
  currentError: error | null = null;

  setPriority(priority: string) {
    this.selectedPriority = priority;
  }
  createError(message: string, status: number): error {
    return {
      message,
      status
    }
  }

  createTask(title: string, description: string, dueDate: string) {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle || !trimmedDescription || !dueDate) {
      this.currentError = this.createError('Please enter a task title, description, and due date', 400);
      setTimeout(() => {
        this.currentError = null;
      }, 5000)
      return;
    }
    this.currentError = null;
    const newTask: Task = {
      id: uuid().split('-')[0],
      title: trimmedTitle,
      description: trimmedDescription,
      dueDate,
      priority: this.selectedPriority,
      createdAt: new Date(),
      type: 'To Do'
    };

    this.sendTasks.emit(newTask);

    this.selectedPriority = 'medium';
  }
}
