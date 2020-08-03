import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { TasksList } from "../../models/crud-interfaces";
import * as actions from "../../../store/actions";

@Component({
  selector: "app-create-lists",
  templateUrl: "./create-lists.component.html",
  styleUrls: ["./create-lists.component.scss"],
})
export class CreateListsComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<{ tdl: TasksList }>
  ) {}
  newListForm: FormGroup;

  ngOnInit(): void {
    this.newListForm = this.fb.group({
      title: ["", [Validators.minLength(2), Validators.maxLength(50)]],
    });
  }

  getTitle(): string {
    return this.newListForm.get("title").value;
  }

  clearInput() {
    this.newListForm.reset();
  }

  createNewList() {
    this.store.dispatch(
      actions.createTaskList({
        listTitle: this.getTitle(),
      })
    );
    this.clearInput();
  }
}
