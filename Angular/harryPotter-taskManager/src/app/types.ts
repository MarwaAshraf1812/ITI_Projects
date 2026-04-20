export interface slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  category: string;
  house: string;
  dueDate: string;
  status: taskType;
  isCompleted: boolean;
}

export interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  school: string;
}
export type Tabs = 'All' | 'To Do' | 'In Progress' | 'Done';
export type taskType = 'To Do' | 'In Progress' | 'Done';
export type popUpTypes = 'success' | 'error' | 'warning' | 'info';
export type house = 'Ravenclaw' | 'Gryffindor' | 'Slytherin' | 'Hufflepuff';