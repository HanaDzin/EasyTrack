import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";

//every component needs to declare things needed to work correctly (cannot inherit from other)
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [NewTaskComponent, TaskComponent, TasksComponent],
    exports: [TasksComponent],  //because this is the only one used in other components from app module
    imports: [SharedModule, CommonModule, FormsModule]
})
export class TasksModule {}