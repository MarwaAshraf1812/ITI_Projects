import { Component, Input } from '@angular/core';
import { taskList } from './components/taskList/taskList';
import { Task } from './types';
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

  getData(task: Task) {
    this.tasks.push(task);
    console.log('Tasks stored in App:', this.tasks);
  }
  updateTask(taskUpdated: Task) {
    const taskIdx = this.tasks.findIndex(task => task.id === taskUpdated.id);
    if(taskIdx !== -1) {
      this.tasks[taskIdx] = taskUpdated;
    }
  }
}
