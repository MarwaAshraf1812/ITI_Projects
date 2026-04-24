import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { Tabs, Task, taskType } from "../types";
import { popUpService } from "./popUp.service";
import { Router } from "@angular/router";
import { AuthServiceService } from "./authService.service";
import { ApiService } from "./api.service";
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private auth = inject(AuthServiceService);
  private popUp = inject(popUpService);
  private api = inject(ApiService);
  router = inject(Router);

  tasks = signal<Task[]>([]);
  selectedTask = signal<Task | null>(null);
  selectedTab = signal<Tabs>('All');
  searchQuery = signal<string>('');
  sortBy = signal<string>('dueDate');
  currentPage = signal(1);
  pageSize = 3;

  constructor() {
    effect(() => {
      const user = this.auth.currentUser();
      if (user) {
        this.loadTasks();
      } else {
        this.tasks.set([]);
      }
    });
  }

  recentTasks = computed(() => this.tasks().slice(-3).reverse());

  filteredTasks = computed(() => {
    const tab = this.selectedTab();
    const all = this.tasks();
    const searchQuery = this.searchQuery();
    let filtered = tab === 'All' ? all : all.filter(t => t.status === tab);
    if(searchQuery){
      filtered = filtered.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()) || t.description.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return filtered;
  });


  paginatedTasks = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredTasks().slice(start, start + this.pageSize);
  });

  totalPages = computed(() => Math.ceil(this.filteredTasks().length / this.pageSize));

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) this.currentPage.set(page);
  }

  setActiveTab(tab: Tabs) {
    this.selectedTab.set(tab);
    this.currentPage.set(1);
  }

  selectTask(task: Task | null) {
    this.selectedTask.set(task);
    if (task) this.router.navigate(['/task-manager']);
  }

  loadTasks() {
    const userId = this.auth.currentUser()?.id;
    if (!userId) return;
    this.api.get<Task[]>(`tasks?userId=${userId}`).subscribe({
      next: (tasks) => this.tasks.set(tasks),
      error: () => this.popUp.showPopUp('error', 'Could not summon your tasks!')
    });
  }

  addTask(task: Task) {
    const userId = this.auth.currentUser()?.id;
    if (!userId) return;
    const newTask: Task = { ...task, id: crypto.randomUUID(), userId };
    this.api.post<Task>('tasks', newTask).subscribe({
      next: (created) => {
        this.tasks.update((prev) => [...prev, created]);
        this.popUp.showPopUp('success', 'Assignment magically added to your scroll! ✨');
      },
      error: () => this.popUp.showPopUp('error', 'Failed to conjure the task!')
    });
  }

  updateTask(id: string, updatedTask: Task) {
    this.api.put<Task>(`tasks/${id}`, updatedTask).subscribe({
      next: (saved) => {
        this.tasks.update((prev) => prev.map((t) => t.id === id ? saved : t));
        this.popUp.showPopUp('success', 'Assignment magically updated! ✨');
      },
      error: () => this.popUp.showPopUp('error', 'The update spell failed!')
    });
  }

  deleteTask(id: string) {
    this.api.delete(`tasks/${id}`).subscribe({
      next: () => {
        this.tasks.update((prev) => prev.filter((t) => t.id !== id));
        if (this.selectedTask()?.id === id) this.selectedTask.set(null);
        this.popUp.showPopUp('warning', 'Assignment vanished into thin air! ✖');
      },
      error: () => this.popUp.showPopUp('error', 'The Vanishing Spell failed!')
    });
  }

  deleteAllTasks() {
    const currentTasks = this.tasks();
    if (currentTasks.length === 0) {
      this.popUp.showPopUp('error', 'No assignments to vanish!');
      return;
    }
    const requests = currentTasks.map((t) => this.api.delete(`tasks/${t.id}`));
    forkJoin(requests).subscribe({
      next: () => {
        this.tasks.set([]);
        this.selectedTask.set(null);
        this.popUp.showPopUp('success', 'All assignments vanished! 🧹');
      },
      error: () => this.popUp.showPopUp('error', 'Some tasks resisted the Vanishing Spell!')
    });
  }

  markTaskIsCompleted(id: string) {
    const task = this.tasks().find((t) => t.id === id);
    if (!task) return;
    const updated: Task = { ...task, isCompleted: true, status: 'Done' };
    this.api.put<Task>(`tasks/${id}`, updated).subscribe({
      next: (saved) => {
        this.tasks.update((prev) => prev.map((t) => t.id === id ? saved : t));
        this.popUp.showPopUp('success', 'Brilliant! House points for you! 🏆t');
      },
      error: () => this.popUp.showPopUp('error', 'The Completion Charm failed!')
    });
  }

  changeStatus(id: string, status: taskType) {
    const task = this.tasks().find((t) => t.id === id);
    if (!task) return;
    const updated: Task = { 
      ...task, 
      status,
      isCompleted: status === 'Done'
    };
    this.api.put<Task>(`tasks/${id}`, updated).subscribe({
      next: (saved) => this.tasks.update((prev) => prev.map((t) => t.id === id ? saved : t)),
      error: () => this.popUp.showPopUp('error', 'Status charm failed!')
    });
  }
}
