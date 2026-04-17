import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TaskCardComponent } from "../taskCard/taskCard";
import { Task } from "../../types";

type tabsName = 'All' | 'To Do' | 'In Progress' | 'Done';

@Component({
  selector: 'app-taskList',
  imports: [ TaskCardComponent],
  templateUrl: './taskList.html',
  styleUrl: './taskList.css',
})
export class taskList {
  tabsName: tabsName[] = ['All', 'To Do', 'In Progress', 'Done'];
  selectedTab: tabsName = 'All';

  @Input() tasks: Task[] = [];

  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<string>();
  @Output() taskEdit = new EventEmitter<Task>();

  

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
    this.taskUpdated.emit(taskUpdated);
  }
  deleteTask(taskId: string) {
    this.taskDeleted.emit(taskId);
  }
  editTask(task: Task) {
    this.taskEdit.emit(task);
  }

}