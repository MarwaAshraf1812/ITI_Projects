import { Component } from '@angular/core';
import { TaskPanel } from '../../components/task-panel/task-panel';
import { TaskList } from '../../components/task-list/task-list';
import { Task } from '../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  imports: [TaskPanel, TaskList, RouterLink],
  standalone: true,
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager {
  recentTasks: Task[] = [
    {
      id: '101',
      title: 'Practice Wingardium Leviosa',
      description: 'Remember, it is levi-O-sa, not levio-SA!',
      priority: 'Medium',
      category: 'Spells',
      house: 'Gryffindor',
      dueDate: '2026-04-21',
      status: 'To Do',
      isCompleted: false
    },
    {
      id: '102',
      title: 'Feed the Owls',
      description: 'Make sure Hedwig gets her favorite treats from Diagon Alley.',
      priority: 'Low',
      category: 'Other',
      house: 'Hufflepuff',
      dueDate: '2026-04-21',
      status: 'Done',
      isCompleted: true
    },
    {
      id: '103',
      title: 'Study Wand Lore',
      description: 'Ollivander mentioned some interesting properties of dragon heartstring.',
      priority: 'High',
      category: 'Other',
      house: 'Ravenclaw',
      dueDate: '2026-04-22',
      status: 'In Progress',
      isCompleted: false
    },
  ];
}
