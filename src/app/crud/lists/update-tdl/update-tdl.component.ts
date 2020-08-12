import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-update-tdl",
  templateUrl: "./update-tdl.component.html",
  styleUrls: ["./update-tdl.component.scss"],
})
export class UpdateTdlComponent {
  constructor(private store: Store) {}
}
