import { Component, OnInit } from "@angular/core";
import { TasksService } from "src/app/services/tasks.service";

@Component({
  selector: "app-done-list",
  templateUrl: "./done-list.component.html",
  styleUrls: ["./done-list.component.scss"],
})
export class DoneListComponent implements OnInit {
  tasks: Array<any> = [];
  constructor(private service: TasksService) {}

  ngOnInit() {
    this.getDoneList(); // get done List
  }

  getDoneList() {
    this.service.get({ status: true }).subscribe((_response) => {
      this.tasks = _response.body.data;
    });
  }

  updateTask(id) {
    this.service
      .put(id, {
        status: false,
      })
      .subscribe((_response) => {
        alert(_response.body.message);
        this.getDoneList();
      });
  }
}
