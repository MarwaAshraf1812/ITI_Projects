import { Component, inject, effect } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Task } from '../../types';
import { TasksService } from '../../services/tasks.service';
import { popUpService } from '../../services/popUp.service';

@Component({
  selector: 'app-task-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './task-panel.html',
  styleUrl: './task-panel.css',
})
export class TaskPanel {
  taskService = inject(TasksService);
  popUpService = inject(popUpService);
  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    priority: new FormControl('Low', [Validators.required]),
    category: new FormControl('Potions', [Validators.required]),
    house: new FormControl('Gryffindor', [Validators.required]),
    dueDate: new FormControl('', [Validators.required, this.futureDateValidator]),
    status: new FormControl('To Do', [Validators.required]),
    isCompleted: new FormControl(false, [Validators.required]),
  })

  private futureDateValidator(control: any) {
    if (!control.value) return null;
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate < today ? { pastDate: true } : null;
  }

  constructor() {
    effect(() => {
    const selected = this.taskService.selectedTask();
    if(selected) {
      this.taskForm.patchValue(selected);
    } else {
      this.taskForm.reset({
        isCompleted: false,
        status: 'To Do',
        priority: 'Low',
        category: 'Potions',
        house: 'Gryffindor',
        
      });
    }   
  })
  }

  onSubmit() {
    if(this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const selected = this.taskService.selectedTask();

    if(selected) {
      const updated: Task = {
        ...this.taskForm.value,
        id: selected.id,
        status: this.taskForm.value.status || 'To Do',
        isCompleted: this.taskForm.value.isCompleted || false,
      } as Task;
      this.taskService.updateTask(selected.id, updated);
      this.taskService.selectTask(null);
      this.popUpService.showPopUp('success', 'Assignment magically updated on your scroll!');
      return;
    } else {
      const newTask: Task = {
      ...this.taskForm.value,
      id: crypto.randomUUID(),
      status: this.taskForm.value.status || 'To Do',
      isCompleted: this.taskForm.value.isCompleted || false,
    } as Task;
    this.taskService.addTask(newTask);
    this.popUpService.showPopUp('success', 'Assignment magically added to your scroll!');
    }
    this.taskForm.reset({
        isCompleted: false,
        status: 'To Do',
        priority: 'Low',
        category: 'Potions',
        house: 'Gryffindor',
        
      });
    
  }
}
