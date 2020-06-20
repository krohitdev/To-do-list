import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { TasksService } from "../services/tasks.service";

@Component({
  selector: "app-create-to-do",
  templateUrl: "./create-to-do.component.html",
  styleUrls: ["./create-to-do.component.scss"],
})
export class CreateToDoComponent implements OnInit {
  form: FormGroup;
  options: Array<any> = [
    {
      name: "Yes",
      value: "yes",
    },
    {
      name: "No",
      value: "no",
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TasksService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      isRepeat: ["", [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {
      let json = this.form.value;

      this.service.post(json).subscribe((_response) => {
        alert(_response.body.message);
        this.router.navigate(["todo-list"]);
      });
    }
  }
}
