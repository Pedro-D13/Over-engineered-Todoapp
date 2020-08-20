import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";
import * as fromTodoReducer from "../store/reducers";

export interface State {
  tdl: fromTodoReducer.ToDoState;
}

export const reducers: ActionReducerMap<State> = {
  tdl: fromTodoReducer.reducer,
};

export const selectTodoState = createFeatureSelector<fromTodoReducer.ToDoState>(
  "tdl"
);

export const selectedTodoIds = createSelector(
  selectTodoState,
  fromTodoReducer.todoSelectors.selectIds
);
export const selectTodoEntities = createSelector(
  selectTodoState,
  fromTodoReducer.todoSelectors.selectEntities
);
export const selectAllTodo = createSelector(
  selectTodoState,
  fromTodoReducer.todoSelectors.selectAll
);
export const selectTodoTotal = createSelector(
  selectTodoState,
  fromTodoReducer.todoSelectors.selectTotal
);
export const selectCurrentTodoId = createSelector(
  selectTodoState,
  fromTodoReducer.getSelectedTodoId
);

export const selectCurrentTodo = createSelector(
  selectTodoEntities,
  selectCurrentTodoId,
  (todoEntities, todoId) => todoEntities[todoId]
);
