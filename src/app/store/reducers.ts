import { Action, createReducer, on, State } from "@ngrx/store";
import { EntityState, createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { InitialState } from "@ngrx/store/src/models";
import * as todoActions from "../store/actions";
import { state } from "@angular/animations";

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
  ids: ["0", "1", "2"],
  entities: {
    0: {
      id: "0",
      title: "The Tech Stack,the Whole Stack, and nothing but the Stack",
      content: `
      1. Angular,
      2. TypeScript,
      3. RxJs,
      4. Angular Material
      `,
    },
    1: {
      id: "1",
      title: "Uses NgRx for State management",
      content:
        "if you have redux go ahead and open it up devtools instead open it up",
    },
    2: {
      id: "2",
      title: "Responsive web design",
      content:
        "looks great on desktop & mobile, I mean who doesn't like bright green and hot pink? 😅",
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
  }),
  on(todoActions.saveTodoList, (state, actions) => ({
    ...state,
    entities: actions.entities,
    ids: actions.ids,
  })),
  on(todoActions.saveTodoSuccess, (state) => ({
    ...state,
  })),
  on(todoActions.loadTodoList, (state) => ({
    ...state,
  })),
  on(todoActions.loadTodoListSuccess, (state, { entities, ids }) => ({
    ...state,
    entities: entities,
    ids: ids,
  })),
  on(todoActions.clearSavedList, (state) => ({
    ...state,
    entities: {},
    ids: [],
  })),
  on(todoActions.clearedSavedListSuccess, (state) => ({
    ...state,
  }))
);

export function reducer(state: ToDoState | undefined, action: Action) {
  return todoReducer(state, action);
}
export const getSelectedTodoId = (state: ToDoState) => state.selectedTodoId;

// get the selectors

export const todoSelectors = adapter.getSelectors();
