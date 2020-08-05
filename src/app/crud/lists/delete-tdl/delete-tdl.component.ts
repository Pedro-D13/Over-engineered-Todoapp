import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { TasksList } from "src/app/crud/models/crud-interfaces";
import * as actions from "../../../store/actions";
import { TodoAppState } from "../../../store/reducers";

@Component({
  selector: "app-delete-tdl",
  templateUrl: "./delete-tdl.component.html",
  styleUrls: ["./delete-tdl.component.scss"],
})
export class DeleteTdlComponent {
  constructor(private store: Store<{ tdl: TodoAppState }>) {}

  @Input() todoListToDelete: TasksList;

  deleteItem(toDoList: TasksList) {
    this.store.dispatch(
      actions.deleteTaskList({ listTitle: toDoList.listTitle })
    );
  }
}
