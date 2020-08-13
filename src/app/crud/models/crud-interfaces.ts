export interface Tasks {
  title: string;
  date_created?: Date;
  due_date?: Date;
  content?: string;
  priority?: "red" | "yellow" | "green";
}

export interface TasksList {
  listTitle: string;
  tasks: Tasks[];
}

export interface PriorityLabel {
  colour: "red" | "yellow" | "green";
}
