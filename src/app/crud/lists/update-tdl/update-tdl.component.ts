import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import * as actions from "../../../store/actions";

@Component({
  selector: "app-update-tdl",
  templateUrl: "./update-tdl.component.html",
  styleUrls: ["./update-tdl.component.scss"],
})
export class UpdateTdlComponent {
  constructor(private store: Store) {}

  @Input() todoListTitle: string;
  @Input() todoListTitleEdited: string;

  updateTitle(currentTitle, NewTitle) {
    this.store.dispatch(
      actions.updateTaskList({
        oldListTitle: currentTitle,
        newListTitle: NewTitle,
      })
    );
  }
}
