import { Component, inject, OnInit } from '@angular/core';
import { TaskPanel } from '../../components/task-panel/task-panel';
import { TaskList } from '../../components/task-list/task-list';
import { RouterLink } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-manager',
  imports: [TaskPanel, TaskList, RouterLink],
  standalone: true,
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager implements OnInit {
  tasksService = inject(TasksService);
  tasks = this.tasksService.recentTasks;

  ngOnInit() {
    // Load user-specific tasks from localStorage on page load
    this.tasksService.loadTasks();
  }
}
