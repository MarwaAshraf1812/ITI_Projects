import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Task, error, popUpTypes } from '../../types';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-task-input',
  imports: [],
  templateUrl: './taskInput.html',
  styleUrl: './taskInput.css'
})
export class TaskInputComponent {
  @Output() sendTasks = new EventEmitter<Task>();
  selectedPriority: string = 'medium';
  @Output() triggerPopup = new EventEmitter<[popUpTypes, string]>();
  @Input() isEditMode = false;
  errors = {
    title: '',
    description: '',
    dueDate: ''
  };

  @Input() currentTask: Task | null = null;
  @Output() cancelEdit = new EventEmitter<void>();

   // task 4
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Triggered: ', changes);
    if(changes['currentTask']) {
      const newValue = changes['currentTask'].currentValue;
      const oldValue = changes['currentTask'].previousValue;
      
      console.log('Old value:', oldValue);
      console.log('New value:', newValue);

      if(newValue) {
        this.selectedPriority = newValue.priority;
      }
      else {
        this.selectedPriority = 'medium';
      }
       this.errors = {
      title: '',
      description: '',
      dueDate: ''
    };
    }
  }

  setPriority(priority: string) {
    this.selectedPriority = priority;
  }
  createError(message: string, status: number): error {
    return {
      message,
      status
    }
  }

  validateField(field: keyof typeof this.errors, value: string) {
    this.errors[field] = ''

    if (field === 'title') {
      if (!value.trim() || value.trim().length < 3) {
        this.errors.title = 'Title must be at least 3 characters';
      }
    }

    else if (field === 'description') {
      if (!value.trim() || value.trim().length < 5) {
        this.errors.description = 'Description must be at least 5 characters';
      }
    }

    else if (field === 'dueDate') {
      if (!value) {
        this.errors.dueDate = 'Due date is required';
      } else {
        const [year, month, day] = value.split('-');
        const selectedDate = new Date(Number(year), Number(month) - 1, Number(day));
        selectedDate.setHours(0, 0, 0, 0);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate.getTime() < today.getTime()) {
          this.errors.dueDate = 'Due date cannot be in the past';
        }
      }
    }
  }
  validate(title: string, description: string, dueDate: string): boolean {
    this.validateField('title', title);
    this.validateField('description', description);
    this.validateField('dueDate', dueDate);

    return !this.errors.title && !this.errors.description && !this.errors.dueDate;
  }

  clearError(field: keyof typeof this.errors) {
    this.errors[field] = '';
  }

  createTask(titleInput: HTMLInputElement, descInput: HTMLTextAreaElement, dateInput: HTMLInputElement) {
    const title = titleInput.value;
    const description = descInput.value;
    const dueDate = dateInput.value;

    if (!this.validate(title, description, dueDate)) {
      this.triggerPopup.emit(['error', 'Please fill all fields correctly']);
      return;
    }

    const newTask: Task = {
      id: this.isEditMode && this.currentTask ? this.currentTask.id : uuid().split('-')[0],
      title: title.trim(),
      description: description.trim(),
      dueDate,
      priority: this.selectedPriority,
      createdAt: this.isEditMode && this.currentTask ? this.currentTask.createdAt : new Date(),
      type: this.isEditMode && this.currentTask ? this.currentTask.type : 'To Do',
      isCompleted: this.isEditMode && this.currentTask ? this.currentTask.isCompleted : false
    };
    this.sendTasks.emit(newTask);
    this.triggerPopup.emit(['success', this.isEditMode ? 'Task updated successfully' : 'Task created successfully']);

    this.cancelEditState(titleInput, descInput, dateInput);
  }

  cancelEditState(titleInput: HTMLInputElement, descInput: HTMLTextAreaElement, dateInput: HTMLInputElement) {
    this.cancelEdit.emit();
    this.selectedPriority = 'medium';
    titleInput.value = '';
    descInput.value = '';
    dateInput.value = '';
  }
}
