import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromTasks from "../../store/reducers";
import * as tasksAction from "../../store/actions";
import {
  selectTodoEntities,
  selectAllTodo,
  selectCurrentTodo,
} from "src/app/store";
import { Dictionary } from "@ngrx/entity";
import { Todo } from "../../store/reducers";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  todoLists$: Observable<Todo[]>;
  currentTask$: Observable<Todo>;

  constructor(private store: Store<{ tdl: fromTasks.ToDoState }>) {}
  ngOnInit() {
    this.todoLists$ = this.store.pipe(select(selectAllTodo));
    this.currentTask$ = this.store.pipe(select(selectCurrentTodo));
  }
}
