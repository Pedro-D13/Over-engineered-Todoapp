import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreatetaskComponent } from "./tasks/createtask/createtask.component";
import { DeletetaskComponent } from "./tasks/deletetask/deletetask.component";
import { UpdatetaskComponent } from "./tasks/updatetask/updatetask.component";
import { DetailtaskComponent } from "./tasks/detailtask/detailtask.component";
import { ListtasksComponent } from "./lists/list-tasks/listtasks.component";
import { CreateListsComponent } from "./lists/create-lists/create-lists.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";

const components = [
  CreateListsComponent,
  CreatetaskComponent,
  DeletetaskComponent,
  UpdatetaskComponent,
  DetailtaskComponent,
  ListtasksComponent,
];

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatChipsModule,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [...modules],
})
export class CrudModule {}
