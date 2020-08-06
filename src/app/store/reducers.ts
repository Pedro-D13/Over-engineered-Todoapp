import { Action, createReducer, on } from "@ngrx/store";
import { Tasks, TasksList } from "../crud/models/crud-interfaces";
import * as crudActions from "./actions";

export interface TodoAppState {
  lists: TasksList[];
  detail: Tasks;
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
  detail: null,
};

const toDoAppReducer = createReducer(
  initialState,
  on(crudActions.createTaskList, (state, { listTitle }) => ({
    // ...state,
    lists: [...state.lists, { listTitle: listTitle, tasks: [] }],
  })),
  on(crudActions.deleteTaskList, (state, { listTitle }) => ({
    lists: [...state.lists.filter((each) => each.listTitle != listTitle)],
  })),
  on(crudActions.updateTaskList, (state, { oldListTitle, newListTitle }) => ({
    lists: state.lists.splice(
      state.lists.findIndex((each) => {
        each.listTitle == oldListTitle;
        return { listTitle: newListTitle, tasks: each.tasks };
      }),
      1
    ),
  }))
);

export function reducer(state: TodoAppState | undefined, action: Action) {
  return toDoAppReducer(state, action);
}
