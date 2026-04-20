import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from "@angular/core";
import { TaskCardComponent } from "../taskCard/taskCard";
import { Task, popUpTypes } from "../../types";

type tabsName = 'All' | 'To Do' | 'In Progress' | 'Done';

@Component({
  selector: 'app-taskList',
  imports: [ TaskCardComponent],
  templateUrl: './taskList.html',
  styleUrl: './taskList.css',
})
export class taskList implements OnChanges {
  tabsName: tabsName[] = ['All', 'To Do', 'In Progress', 'Done'];
  selectedTab: tabsName = 'All';

  tasks: Task[] = [];
  @Input() incomingTask: Task | null = null;

  @Output() taskEdit = new EventEmitter<Task>();
  @Output() triggerPopup = new EventEmitter<[popUpTypes, string]>();

  // task4
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['incomingTask'] && changes['incomingTask'].currentValue) {
      const task = changes['incomingTask'].currentValue as Task;
      const idx = this.tasks.findIndex(t => t.id === task.id);
      
      if (idx !== -1) {
        this.tasks[idx] = task;
      } else {
        this.tasks.push(task);
      }
      this.tasks = [...this.tasks];
    }
  }

  selectTab(tab: tabsName) {
    this.selectedTab = tab;
  }

  getFilterTasks(tasks: Task[]) {
    if(this.selectedTab === 'All') {
      return tasks;
    }
    return tasks.filter(task=> task.type === this.selectedTab);
  }

  updateTask(taskUpdated: Task) {
    const idx = this.tasks.findIndex(t => t.id === taskUpdated.id);
    if(idx !== -1) {
      this.tasks[idx] = taskUpdated;
      this.tasks = [...this.tasks];
      if (taskUpdated.isCompleted) {
        this.triggerPopup.emit(['info', 'Task completed successfully']);
      }
    }
  }
  
  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.triggerPopup.emit(['warning', 'Task deleted successfully']);
  }
  editTask(task: Task) {
    this.taskEdit.emit(task);
  }

}