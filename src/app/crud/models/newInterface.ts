export interface Task {
  id: string;
  title: string;
  content: string;
  dueDate: Date;
  createdDate: Date;
  priority: "red" | "yellow" | "green";
}

export interface TaskList {
  id: string;
  listTitle: string;
  tasks: Task[];
}
