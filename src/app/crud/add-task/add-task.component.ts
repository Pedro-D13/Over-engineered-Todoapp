import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ToDoState } from "src/app/store/reducers";
import { Store } from "@ngrx/store";
import * as reducers from "../../store/reducers";
import * as actions from "../../store/actions";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MatSelect } from "@angular/material/select";
import { MatInput } from "@angular/material/input";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"],
})
export class AddTaskComponent implements OnInit {
  isWideScreen$: Observable<Boolean>;

  @ViewChild("titleInputFocus") titleInput: ElementRef;

  addTodoForm = this.fb.group({
    id: null,
    title: ["", [Validators.required, Validators.minLength(3)]],
    content: null,
  });

  constructor(
    private store: Store<{ tdl: ToDoState }>,
    private fb: FormBuilder,
    private bpo: BreakpointObserver
  ) {}

  ngOnInit() {
    this.isWideScreen$ = this.bpo
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map((matches) => matches.matches));
  }
  getTodoFormTitle() {
    return this.addTodoForm.get("title").value;
  }
  getTodoFormContent() {
    return this.addTodoForm.get("content").value;
  }

  clearTodoFormValues(): void {
    this.addTodoForm.reset();
  }

  addTask(): void {
    const addme: reducers.Todo = {
      id: new Date().getUTCMilliseconds().toString(),
      title: this.getTodoFormTitle(),
      content: this.getTodoFormContent(),
    };
    this.store.dispatch(actions.addTodo({ todo: addme }));
    this.clearTodoFormValues();
    this.focusInput();
  }

  focusInput() {
    this.titleInput.nativeElement.focus();
  }
}
