import { Component, OnInit } from "@angular/core";
import { Tasks, TasksList } from "../../models/crud-interfaces";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-listtasks",
  templateUrl: "./listtasks.component.html",
  styleUrls: ["./listtasks.component.scss"],
})
export class ListtasksComponent implements OnInit {
  // tasks, has a title, date created, due date, content, priority
  todolists$: Observable<TasksList>;

  constructor(private store: Store<{ tdl: TasksList }>) {}
  ngOnInit(): void {
    this.todolists$ = this.store.pipe(select("tdl"));
  }
}
