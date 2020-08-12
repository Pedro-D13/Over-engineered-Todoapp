import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { TodoAppState } from "src/app/store/reducers";
import * as actions from "../../../store/actions";
import { Tasks, TasksList } from "../../models/crud-interfaces";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-list-tdl",
  templateUrl: "./list-tdl.component.html",
  styleUrls: ["./list-tdl.component.scss"],
})
export class ListTdlComponent implements OnInit {
  // tasks, has a title, date created, due date, content, priority
  todolists$: Observable<TasksList[]>;
  dropDownClicked = false;
  updateInput: FormGroup;

  constructor(
    private store: Store<{ tdl: TodoAppState }>,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.todolists$ = this.store.pipe(select("tdl", "lists"));
    this.updateInput = this.fb.group({
      updateTitle: ["", [Validators.maxLength(50), Validators.minLength(1)]],
    });
  }

  clicked(bool: boolean) {
    return !bool;
  }

  detailCurrentDoList(detailTask: TasksList) {
    this.router.navigate([
      "",
      `${detailTask.listTitle.replace(" ", "-").trim()}`,
    ]);
    this.store.dispatch(actions.detailTaskList({ tasklist: detailTask }));
  }

  updateTitle(currentTitle: string, NewTitle: string, tasks: Tasks[]) {
    console.log("trigger");
    this.store.dispatch(
      actions.updateTaskList({
        oldListTitle: currentTitle,
        newListTitle: NewTitle,
        tasksToAdd: tasks,
      })
    );
  }
}
