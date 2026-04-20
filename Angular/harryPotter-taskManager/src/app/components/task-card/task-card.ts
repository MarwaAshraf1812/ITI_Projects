import { Component, Input } from "@angular/core";
import { Task } from "../../types";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
  imports: [NgClass]
})
export class TaskCard {
  @Input() task!: Task;
}
