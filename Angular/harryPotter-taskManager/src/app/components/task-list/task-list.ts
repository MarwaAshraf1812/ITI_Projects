import { Component, Input } from "@angular/core";
import { Task } from "../../types";
import { TaskCard } from "../task-card/task-card";

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: Task[] = [];
}