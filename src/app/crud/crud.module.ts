import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreatetaskComponent } from "./createtask/createtask.component";
import { DeletetaskComponent } from "./deletetask/deletetask.component";
import { UpdatetaskComponent } from "./updatetask/updatetask.component";
import { DetailtaskComponent } from "./detailtask/detailtask.component";
import { ListtasksComponent } from "./listtasks/listtasks.component";

const components = [
  CreatetaskComponent,
  DeletetaskComponent,
  UpdatetaskComponent,
  DetailtaskComponent,
  ListtasksComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
})
export class CrudModule {}
