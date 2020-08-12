import { Action, createReducer, on } from "@ngrx/store";
import { Tasks, TasksList } from "../crud/models/crud-interfaces";
import * as crudActions from "./actions";
import { state } from "@angular/animations";

export interface TodoAppState {
  lists: TasksList[];
  detail: TasksList;
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
    {
      listTitle: "new task 2 ",
      tasks: [{ title: "get money", content: "get rich?" }],
    },
    {
      listTitle: "shopping list",
      tasks: [{ title: "water", content: "buy water" }],
    },
  ],
  detail: { listTitle: "", tasks: [] },
};

const toDoAppReducer = createReducer(
  initialState,
  on(crudActions.createTaskList, (state, { listTitle }) => ({
    ...state,
    lists: [...state.lists, { listTitle: listTitle, tasks: [] }],
  })),
  on(crudActions.deleteTaskList, (state, { listTitle }) => ({
    ...state,
    lists: [...state.lists.filter((each) => each.listTitle != listTitle)],
  })),
  on(crudActions.detailTaskList, (state, { tasklist }) => ({
    ...state,
    detail: tasklist,
  })),
  on(
    crudActions.updateTaskList,
    (state, { oldListTitle, newListTitle, tasksToAdd }) => {
      return {
        lists: state.lists.map((each) => {
          if (each.listTitle === oldListTitle) {
            return { listTitle: newListTitle, tasks: tasksToAdd };
          } else {
            return each;
          }
        }),
      };
    }
  )
);

export function reducer(state: TodoAppState | undefined, action: Action) {
  return toDoAppReducer(state, action);
}
