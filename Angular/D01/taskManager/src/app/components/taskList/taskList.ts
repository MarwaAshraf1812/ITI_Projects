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

  selectTab(tab: tabsName) {
    this.selectedTab = tab;
  }

  updateTask(taskUpdated: Task) {
    this.taskUpdated.emit(taskUpdated);
  }

}