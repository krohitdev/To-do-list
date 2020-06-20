import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateToDoComponent } from "./create-to-do/create-to-do.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { DoneListComponent } from "./to-do-list/done-list/done-list.component";

const routes: Routes = [
  {
    path: "",
    component: CreateToDoComponent,
  },
  {
    path: "todo-list",
    component: ToDoListComponent,
  },
  {
    path: "done-list",
    component: DoneListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
