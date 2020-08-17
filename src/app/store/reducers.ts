import { Action, createReducer, on, State } from "@ngrx/store";
import { EntityState, createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { InitialState } from "@ngrx/store/src/models";
import * as todoActions from "../store/actions";

//
export interface Todo {
  id: "";
  title: "";
}

export interface ToDoState extends EntityState<Todo> {
  content: string;
  selectedTodoId: null;
}
export function selectTodoId(item: Todo): string {
  return item.id;
}
export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: selectTodoId,
  sortComparer: sortBytitle,
});

export function sortBytitle(item1: Todo, item2: Todo): number {
  return item1.title.localeCompare(item2.title);
}

export const initialState: ToDoState = adapter.getInitialState({
  content: "this is working a bit of contnent ",
  selectedTodoId: null,
});

const todoReducer = createReducer(
  initialState,
  on(todoActions.addTodo, (state, action) => {
    return adapter.addOne(action.todo, state);
  }),
  on(todoActions.deleteTodo, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),
  on(todoActions.updateTodo, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export function reducer(state: ToDoState | undefined, action: Action) {
  return todoReducer(state, action);
}

export const getSelectedTodoId = (state: ToDoState) => state.selectedTodoId;

const todoSelectors = adapter.getSelectors();

// select the array of user ids
export const selectedTodoId = todoSelectors.selectIds;

// select the dictionary of user entities
export const selectTodoEntities = todoSelectors.selectEntities;

// select the array of users
export const selectAllTodo = todoSelectors.selectAll;

// select the total user count
export const selectTodoTotal = todoSelectors.selectTotal;
