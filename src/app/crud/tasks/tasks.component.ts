import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromTasks from "../../store/reducers";
import * as todoAction from "../../store/actions";
import {
  selectTodoEntities,
  selectAllTodo,
  selectCurrentTodo,
} from "src/app/store";
import { Dictionary } from "@ngrx/entity";
import { Todo } from "../../store/reducers";
import { FormBuilder, Validators } from "@angular/forms";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { AddTaskComponent } from "src/app/crud/add-task/add-task.component";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  todoLists$: Observable<Todo[]>;

  currentTask$: Observable<Todo>;
  editTodoForm = this.fb.group({
    title: ["", [Validators.required, Validators.minLength(3)]],
    content: null,
  });
  constructor(
    private store: Store<{ tdl: fromTasks.ToDoState }>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    if (localStorage.getItem("state")) {
      this.store.dispatch(todoAction.loadTodoList());
    }
    this.todoLists$ = this.store.pipe(select(selectAllTodo));
    this.currentTask$ = this.store.pipe(select(selectCurrentTodo));
  }

  deleteTodo(id: string) {
    this.store.dispatch(todoAction.deleteTodo({ id: id }));
  }

  getTodoTitle() {
    return this.editTodoForm.get("title").value;
  }
  getTodoContent() {
    return this.editTodoForm.get("content").value;
  }

  editTodo(currentId: number) {
    //  change current panel description into inputs
    // on cancel or submission switch back to the current tasks content
    const newTitle = this.getTodoTitle();
    const newContent = this.getTodoContent();

    this.store.dispatch(
      todoAction.updateTodo({
        update: {
          changes: { title: newTitle, content: newContent },
          id: currentId,
        },
      })
    );
  }
}
