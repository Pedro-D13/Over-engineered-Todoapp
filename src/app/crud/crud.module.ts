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
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRippleModule, MatNativeDateModule } from "@angular/material/core";
import { TasksComponent } from "./tasks/tasks.component";

const components = [TasksComponent];

const modules = [
  MatRippleModule,
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
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [...modules],
})
export class CrudModule {}
