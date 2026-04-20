import { Component } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';
import { Task, Tabs } from '../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [TaskList, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  activeTab: Tabs = 'All';

  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

  deleteAllTasks() {
    console.log('Vanish all tasks!');
  }

  loadMore() {
    console.log('Loading more magical secrets...');
  }
  tasks: Task[] = [
    {
      id: '1',
      title: 'Master the Patronus Charm',
      description: 'Need to produce a full corporeal Patronus by the end of the week. Focus on happy memories!',
      priority: 'High',
      category: 'Spells',
      house: 'Ravenclaw',
      dueDate: '2026-05-12',
      status: 'To Do',
      isCompleted: false
    },
    {
      id: '2',
      title: 'Brew Draught of Living Death',
      description: 'Check the Half-Blood Prince\'s notes for the clockwise stir technique.',
      priority: 'Medium',
      category: 'Potions',
      house: 'Slytherin',
      dueDate: '2026-05-15',
      status: 'In Progress',
      isCompleted: false
    },
    {
      id: '3',
      title: 'Quidditch Practice',
      description: 'Drills on the Firebolt. Need to catch the snitch in under 5 minutes.',
      priority: 'High',
      category: 'Quidditch',
      house: 'Gryffindor',
      dueDate: '2026-05-10',
      status: 'Done',
      isCompleted: true
    }
  ];
}
