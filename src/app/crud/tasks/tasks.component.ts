import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Tasks } from "src/app/crud/models/crud-interfaces";

import * as fromTasks from "../../store/reducers";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  constructor(private store: Store<{ tdl: fromTasks.ToDoState }>);

  ngOnInit() {}
}
