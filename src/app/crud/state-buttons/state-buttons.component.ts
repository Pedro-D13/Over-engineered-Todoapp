import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  HostListener,
  Input,
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ToDoState, Todo } from "src/app/store/reducers";
import * as todoActions from "../../store/actions";
import * as todoSelectors from "../../store/index";
import { Observable, Subscription } from "rxjs";
import { toArray } from "rxjs/operators";
import { savestate } from "src/app/store/stateHydratation";
import { Dictionary } from "@ngrx/entity";

@Component({
  selector: "app-state-buttons",
  templateUrl: "./state-buttons.component.html",
  styleUrls: ["./state-buttons.component.scss"],
})
export class StateButtonsComponent implements OnInit, OnDestroy {
  @Input("isWideScreen") isWidescreen$: boolean;

  constructor(private store: Store<{ tdl: ToDoState }>) {}

  currentEnt$: Observable<Dictionary<Todo>>;
  currentIds$: Observable<string[] | number[]>;
  onchanges$: Subscription;

  ngOnInit() {
    this.currentEnt$ = this.store.select(todoSelectors.selectTodoEntities);
    this.currentIds$ = this.store.select(todoSelectors.selectedTodoIds);
  }
  ngOnDestroy() {
    // this.onchanges$.unsubscribe();
  }

  clearStateTrigger() {
    this.store.dispatch(todoActions.clearSavedList());
  }

  saveStateTrigger() {
    this.store.dispatch(
      todoActions.saveTodoList({
        entities: this.getEntitiesObj(),
        ids: this.getIdsObj(),
      })
    );
  }

  getEntitiesObj(): Object {
    let snapShotEntities: any;
    const firstSub = this.currentEnt$.subscribe((x) => (snapShotEntities = x));

    firstSub.unsubscribe();

    return snapShotEntities;
  }

  getIdsObj() {
    let snapShotIds: any;
    const secSub = this.currentIds$.subscribe((x) => (snapShotIds = x));

    secSub.unsubscribe();
    return snapShotIds;
  }
}
