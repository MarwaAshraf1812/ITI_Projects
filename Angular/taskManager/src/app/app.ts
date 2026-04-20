import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class App implements OnInit, OnDestroy {
  // task 4
  private popupTimeoutId: any;
  incomingTask: Task | null = null;

  currentPopup: { message: string, color: string } | null | undefined = null;
  currentTask: Task | null = null;
  isEditMode = false;

  handleEditTask(task: Task) {
    this.isEditMode = true;
    this.currentTask = { ...task };
  }

  cancelEdit() {
    this.isEditMode = false;
    this.currentTask = null;
  }

  getData(task: Task) {
    this.incomingTask = { ...task };
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
      if (this.popupTimeoutId) {
        clearTimeout(this.popupTimeoutId);
      }
      this.currentPopup = this.popup(type, message);
      this.popupTimeoutId = setTimeout(() => {
        this.currentPopup = null;
      }, 3000);
  }

   // task 4
  ngOnInit(): void {
    setTimeout(() => {
      this.showPopup('success', 'Welcome to Task Manager, now you can manage your tasks efficiently!');
    }, 500);
  }

  ngOnDestroy(): void {
    if (this.popupTimeoutId) {
      clearTimeout(this.popupTimeoutId);
    }
  }
}
