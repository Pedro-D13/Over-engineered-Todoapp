import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksList } from "src/app/crud/models/crud-interfaces";

@Component({
  selector: "app-detail-tdl",
  templateUrl: "./detail-tdl.component.html",
  styleUrls: ["./detail-tdl.component.scss"],
})
export class DetailTdlComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  currentDetail$: TasksList;

  ngOnInit() {
    // this.currentDetail$ = this.route.paramMap.pipe(
    //   // switchMap((params) => {
    //   //   const data = params.getAll();
    //   //   return data;
    //   })
    // );
  }
}
