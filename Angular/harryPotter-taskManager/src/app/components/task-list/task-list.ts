import { Component, inject, input } from "@angular/core";
import { Task } from "../../types";
import { TaskCard } from "../task-card/task-card";
import { TasksService } from "../../services/tasks.service";

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasksService = inject(TasksService);
  tasks = input<Task[]>([]);
}