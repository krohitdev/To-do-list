import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateToDoComponent } from "./create-to-do/create-to-do.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DoneListComponent } from './to-do-list/done-list/done-list.component';

@NgModule({
  declarations: [AppComponent, CreateToDoComponent, ToDoListComponent, DoneListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
