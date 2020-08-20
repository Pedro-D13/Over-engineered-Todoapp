import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import * as todoActions from "../store/actions";
import { Store } from "@ngrx/store";
import { ToDoState } from "src/app/store/reducers";
import {
  savestate,
  loadstate,
  clearState,
} from "src/app/store/stateHydratation";

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions) {}

  saveState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.saveTodoList),
      tap(({ ids, entities }) => savestate({ ids, entities })),
      map(() => {
        return todoActions.saveTodoSuccess();
      })
    )
  );

  loadState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.loadTodoList),
      map(() => {
        const json = loadstate();
        return todoActions.loadTodoListSuccess({
          entities: json.entities,
          ids: json.ids,
        });
      })
    )
  );

  clearState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.clearSavedList),
      tap(() => {
        clearState();
      }),
      map(() => {
        return todoActions.clearedSavedListSuccess();
      })
    )
  );
}
