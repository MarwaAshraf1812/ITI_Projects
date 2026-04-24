import { Component, inject } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';
import { Task, Tabs } from '../../types';
import { RouterLink } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskList, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  taskService = inject(TasksService);

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.taskService.searchQuery.set(target.value);
  }


  deleteAllTasks() {
    this.taskService.deleteAllTasks();
  }
}
