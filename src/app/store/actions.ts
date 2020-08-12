import { createAction, props } from "@ngrx/store";
import { Tasks, TasksList } from "../crud/models/crud-interfaces";

// create new lists
export const createTaskList = createAction(
  "[crud] create a new list for tasks",
  props<{ listTitle: string }>()
);

export const deleteTaskList = createAction(
  "[crud] delete a list for tasks",
  props<{ listTitle: string }>()
);

export const updateTaskList = createAction(
  "[crud] update a list title",
  props<{
    oldListTitle: string;
    newListTitle: string;
    tasksToAdd: Tasks[];
  }>()
);

export const detailTaskList = createAction(
  "[crud] detail the tdl and all it's tasks",
  props<{ tasklist: TasksList }>()
);

// create tasks
export const addTask = createAction(
  "[crud] create a new task ",
  props<Tasks>()
);
