import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { AuthServiceService } from '../../services/authService.service';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  authService = inject(AuthServiceService);
  taskService = inject(TasksService);

  stats = computed(() => {
    const tasks = this.taskService.tasks();
    return {
      total: tasks.length,
      completed: tasks.filter(t => t.isCompleted).length,
      pending: tasks.filter(t => !t.isCompleted).length,
    }
  })
}
