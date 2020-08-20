import { createAction, props } from "@ngrx/store";

import { Update } from "@ngrx/entity";
import { Todo } from "src/app/store/reducers";
import { Observable } from "rxjs";

export const addTodo = createAction(
  "[todo] create a new todo item ",
  props<{ todo: Todo }>()
);

export const deleteTodo = createAction(
  "[todo] delete a todo item",
  props<{ id: string }>()
);

export const updateTodo = createAction(
  "[todo] update a todo item",
  props<{ update: Update<Todo> }>()
);

export const saveTodoList = createAction(
  "[todo effect] save current todo list ",
  props<{ ids: string[] | number[]; entities: {} }>()
);

export const saveTodoSuccess = createAction(
  "[todo effect result] current todolist saved"
);

export const loadTodoList = createAction("[todo effect] load saved todo list");

export const loadTodoListSuccess = createAction(
  "[todo effect result] saved todolist loaded",
  props<{ ids: string[] | number[]; entities: {} }>()
);

export const clearSavedList = createAction(
  "[todo effect] clear saved todo list"
);

export const clearedSavedListSuccess = createAction(
  "[todo effect result] successfully cleared the stored lists"
);
