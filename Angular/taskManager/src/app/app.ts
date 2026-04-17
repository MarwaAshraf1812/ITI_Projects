import { Component, Input } from '@angular/core';
import { taskList } from './components/taskList/taskList';
import { popUpTypes, Task } from './types';
import { TaskInputComponent } from './components/taskInput/taskInput';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CarouselComponent } from './components/carousel/carousel';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, taskList, TaskInputComponent, FooterComponent, CarouselComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks: Task[] = [];
  currentPopup: { message: string, color: string } | null | undefined = null;
  currentTask: Task | null = null;
  isEditMode = false;

  handleEditTask(task: Task) {
    this.isEditMode = true;
    this.currentTask = task;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.currentTask = null;
  }

  getData(task: Task) {
    const idx = this.tasks.findIndex(t => t.id === task.id);
    if(idx !== -1) {
      this.tasks[idx] = task;
    } else {
      this.tasks.push(task);
    }
    console.log('Tasks stored in App:', this.tasks);
  }
  popup(popType: popUpTypes, message: string) {
      if (popType === 'success') {
        return {
          message: message,
          color: 'green',
  
        }
      }
      else if (popType === 'error') {
        return {
          message: message,
          color: 'red',
  
        }
      }
      else if (popType === 'warning') {
        return {
          message: message,
          color: 'gray',
  
        }
      }
      else if (popType === 'info') {
        return {
          message: message,
          color: 'blue',
  
        }
      }
      return undefined;
    }
  
    showPopup(type: popUpTypes, message: string) {
      this.currentPopup = this.popup(type, message);
      setTimeout(() => {
        this.currentPopup = null;
      }, 3000);
    }
  updateTask(taskUpdated: Task) {
    const taskIdx = this.tasks.findIndex(task => task.id === taskUpdated.id);
    if(taskIdx !== -1) {
      this.tasks[taskIdx] = taskUpdated;
        if (taskUpdated.isCompleted) {
         this.showPopup('info', 'Task completed successfully');
      }
    }
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.showPopup('warning', 'Task deleted successfully');
    
    if (this.currentTask && this.currentTask.id === taskId) {
      this.cancelEdit();
    }
    
    console.log('Tasks stored in App:', this.tasks);
  }
}
