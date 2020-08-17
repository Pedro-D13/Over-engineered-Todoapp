export interface Tasks {
  title: string;
  date_created?: Date;
  due_date?: Date;
  content?: string;
  priority?: "red" | "yellow" | "green";
}

export interface TasksList {
  listTitle: string; //treat this as the id of the
  tasks: Tasks[];
}

export interface PriorityLabel {
  colour: "red" | "yellow" | "green";
}
