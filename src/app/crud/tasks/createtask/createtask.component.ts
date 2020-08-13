import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  Tasks,
  PriorityLabel,
  TasksList,
} from "src/app/crud/models/crud-interfaces";

import { Store, select } from "@ngrx/store";
import { TodoAppState } from "src/app/store/reducers";
import { Observable } from "rxjs";
import * as actions from "../../../store/actions";

@Component({
  selector: "app-createtask",
  templateUrl: "./createtask.component.html",
  styleUrls: ["./createtask.component.scss"],
})
export class CreatetaskComponent implements OnInit {
  createNewTask: FormGroup;
  tdlDetail$: Observable<TasksList>;

  priorityOptions: PriorityLabel[] = [
    { colour: "red" },
    { colour: "yellow" },
    { colour: "green" },
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store<{ tdl: TodoAppState }>
  ) {}

  ngOnInit(): void {
    this.tdlDetail$ = this.store.pipe(select("tdl", "detail"));
    this.createNewTask = this.fb.group({
      title: "",
      content: "",
      date_created: Date,
      due_date: Date,
      priority: "",
    });
  }

  getTitle() {
    return this.createNewTask.get("title").value;
  }
  getContent() {
    return this.createNewTask.get("content").value;
  }
  getDueDate() {
    return this.createNewTask.get("DueDate").value;
  }
  getPriority() {
    return this.createNewTask.get("priority").value;
  }

  createTask() {
    this.store.dispatch(
      actions.addTask({
        title: this.getTitle(),
        content: this.getContent(),
        date_created: this.createTimeStamp(),
        due_date: this.getPriority(),
        priority: this.getPriority(),
      })
    );
  }

  createTimeStamp() {
    return new Date();
  }
}
