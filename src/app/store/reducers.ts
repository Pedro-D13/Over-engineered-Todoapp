import { Action, createReducer, on, State } from "@ngrx/store";
import { EntityState, createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { InitialState } from "@ngrx/store/src/models";
import * as todoActions from "../store/actions";

//
export interface Todo {
  id: string;
  title: string;
  content?: string;
}

export interface ToDoState extends EntityState<Todo> {
  selectedTodoId: number;
}
export function selectTodoId(item: Todo): string {
  return item.id;
}
export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: selectTodoId,
  sortComparer: false,
});

export function sortBytitle(item1: Todo, item2: Todo): number {
  return item1.title.localeCompare(item2.title);
}

export const initialState: ToDoState = adapter.getInitialState({
  ids: ["0", "1", "3"],
  entities: {
    0: {
      id: "0",
      title: "Do you like Angular?",
      content: "Built using Angular's awesome set of tools",
    },
    1: {
      id: "1",
      title: "Do you like State Management?",
      content: "NgRx to the rescue",
    },
    3: {
      id: "3",
      title: "What about SPA's",
      content:
        "jacuzzi and sauna's are nice, but so are Single Page Applications",
    },
  },
  selectedTodoId: 1,
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

// get the selectors

export const todoSelectors = adapter.getSelectors();

// // select the array of user ids
// export const selectedTodoId = todoSelectors.selectIds;

// // select the dictionary of user entities
// export const selectTodoEntities = todoSelectors.selectEntities;

// // select the array of users
// export const selectAllTodo = todoSelectors.selectAll;

// // select the total user count
// export const selectTodoTotal = todoSelectors.selectTotal;
