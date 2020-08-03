import { createAction, props } from "@ngrx/store";
import { TasksList, Tasks } from "../crud/models/crud-interfaces";

// create new lists
export const createTaskList = createAction(
  "[crud] create a new list for tasks",
  props<{ listTitle: string }>()
);

// create tasks
export const addTask = createAction(
  "[crud] create a new task ",
  props<Tasks>()
);
