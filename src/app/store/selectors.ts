import { createSelector } from "@ngrx/store";
import { TasksList } from "../crud/models/crud-interfaces";

export interface AppState {
  todolists: TasksList;
}

export const selectTodoList = (state: AppState) => state.todolists;

export const selectFeatureTodolists = createSelector(
  selectTodoList,
  (state: TasksList) => {
    state.listTitle, state.tasks;
  }
);
