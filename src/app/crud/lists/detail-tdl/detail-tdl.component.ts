import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { TasksList } from "src/app/crud/models/crud-interfaces";
import { TodoAppState } from "src/app/store/reducers";

@Component({
  selector: "app-detail-tdl",
  templateUrl: "./detail-tdl.component.html",
  styleUrls: ["./detail-tdl.component.scss"],
})
export class DetailTdlComponent implements OnInit {
  constructor(private store: Store<{ tdl: TodoAppState }>) {}
  currentDetail$: Observable<TasksList>;

  ngOnInit() {
    this.currentDetail$ = this.store.pipe(select("tdl", "detail"));
  }
}
