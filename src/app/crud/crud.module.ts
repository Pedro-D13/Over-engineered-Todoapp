import { CdkTreeModule } from "@angular/cdk/tree";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { ListTdlComponent } from "src/app/crud/lists/list-tdl/list-tdl.component";
import { CreateListsComponent } from "./lists/create-lists/create-lists.component";
import { DeleteTdlComponent } from "./lists/delete-tdl/delete-tdl.component";
import { DetailTdlComponent } from "./lists/detail-tdl/detail-tdl.component";
import { UpdateTdlComponent } from "./lists/update-tdl/update-tdl.component";
import { CreatetaskComponent } from "./tasks/createtask/createtask.component";
import { DeletetaskComponent } from "./tasks/deletetask/deletetask.component";
import { DetailtaskComponent } from "./tasks/detailtask/detailtask.component";
import { UpdatetaskComponent } from "./tasks/updatetask/updatetask.component";

const components = [
  CreateListsComponent,
  CreatetaskComponent,
  DeletetaskComponent,
  UpdatetaskComponent,
  DetailtaskComponent,
  ListTdlComponent,
  DeleteTdlComponent,
  DetailTdlComponent,
  UpdateTdlComponent,
];

const modules = [
  CommonModule,
  FormsModule,
  MatListModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  CdkTreeModule,
  MatSelectModule,
  MatButtonModule,
  MatChipsModule,
  MatExpansionModule,
  MatIconModule,
  MatCheckboxModule,
  RouterModule,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [...modules],
})
export class CrudModule {}
