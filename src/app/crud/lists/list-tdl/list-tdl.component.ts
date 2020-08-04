import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TodoAppState } from "src/app/store/reducers";
import { TasksList } from "../../models/crud-interfaces";

@Component({
  selector: "app-list-tdl",
  templateUrl: "./list-tdl.component.html",
  styleUrls: ["./list-tdl.component.scss"],
})
export class ListTdlComponent implements OnInit {
  // tasks, has a title, date created, due date, content, priority
  todolists$: Observable<TasksList[]>;
  dropDownClicked = false;
  dropDownIcon;

  constructor(private store: Store<{ tdl: TodoAppState }>) {}
  ngOnInit(): void {
    this.todolists$ = this.store.pipe(select("tdl", "lists"));
  }

  clicked(bool: boolean) {
    return !bool;
  }
}
