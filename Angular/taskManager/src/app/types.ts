export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  createdAt: Date;
  type: taskType;
  isCompleted: boolean;
}

export type error  = {
  message: string;
  status: number;
}

export interface slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}
export type popUpTypes = 'success' | 'error' | 'warning' | 'info';
export type taskType = 'To Do' | 'In Progress' | 'Done';