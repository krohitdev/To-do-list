import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TasksService } from "../services/tasks.service";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.scss"],
})
export class ToDoListComponent implements OnInit {
  tasks: Array<any> = [];
  constructor(private router: Router, private service: TasksService) {}

  ngOnInit() {
    this.getList(); // get To List
  }

  getList() {
    this.service.get({ status: false }).subscribe((_response) => {
      this.tasks = _response.body.data;
    });
  }

  updateTask(id) {
    this.service
      .put(id, {
        status: true,
      })
      .subscribe((_response) => {
        alert(_response.body.message);
        this.getList();
      });
  }
}
