import { Action, createReducer, on } from "@ngrx/store";
import * as crudActions from "./actions";
import { TasksList, Tasks } from "../crud/models/crud-interfaces";

export interface TodoAppState {
  lists: TasksList[];
}

// dummy data to work with
const manyTasks: Tasks[] = [
  { title: "get things done", date_created: null },
  { title: "make sure you eat healthy", date_created: null, priority: "red" },
  { title: "welcome the guets to the party", date_created: new Date() },
  { title: "get things done", date_created: null, priority: "yellow" },
];

export const initialState: TodoAppState = {
  lists: [
    { listTitle: "default", tasks: manyTasks },
    { listTitle: "new task 2 ", tasks: [] },
    {
      listTitle: "shopping list",
      tasks: [{ title: "water", content: "buy water" }],
    },
  ],
};

const toDoAppReducer = createReducer(
  initialState,
  on(crudActions.createTaskList, (state, { listTitle }) => ({
    // ...state,
    lists: [...state.lists, { listTitle: listTitle, tasks: [] }],
  }))
);

export function reducer(state: TodoAppState | undefined, action: Action) {
  return toDoAppReducer(state, action);
}
