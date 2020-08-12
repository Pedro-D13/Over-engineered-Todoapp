import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailTdlComponent } from "src/app/crud/lists/detail-tdl/detail-tdl.component";
import { ListTdlComponent } from "src/app/crud/lists/list-tdl/list-tdl.component";

const routes: Routes = [
  {
    path: "",
    component: ListTdlComponent,
    children: [{ path: ":listTitle", component: DetailTdlComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ListTdlComponent, DetailTdlComponent];
