import { Action, createReducer, on } from "@ngrx/store";
import * as crudActions from "./actions";
import { TasksList, Tasks } from "../crud/models/crud-interfaces";

const manyTasks: Tasks[] = [
  { title: "get things done", date_created: null },
  { title: "make sure you eat healthy", date_created: null, priority: "red" },
  { title: "welcome the guets to the party", date_created: new Date() },
  { title: "get things done", date_created: null, priority: "yellow" },
];

export const initialState: TasksList[] = [
  { listTitle: "default", tasks: manyTasks },
  { listTitle: "new task 2 ", tasks: [] },
  {
    listTitle: "shopping list",
    tasks: [{ title: "water", content: "buy water" }],
  },
];

const toDoAppReducer = createReducer(
  initialState,
  on(crudActions.createTaskList, (state, { listTitle, tasks }) => ({
    ...state,
    listTitle: listTitle,
    tasks: tasks,
  }))
);

export function reducer(state: TasksList[] | undefined, action: Action) {
  return toDoAppReducer(state, action);
}
