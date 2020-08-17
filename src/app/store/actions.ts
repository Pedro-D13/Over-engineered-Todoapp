import { createAction, props } from "@ngrx/store";

import { Update } from "@ngrx/entity";
import { Todo } from "src/app/store/reducers";

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
