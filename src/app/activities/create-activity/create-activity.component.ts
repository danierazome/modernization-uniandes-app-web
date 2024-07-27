import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ActivityService } from "src/app/services/activity/activity_service";
import { Activity } from "src/app/models/activity/activity_model";

@Component({
  selector: "app-create-activity",
  templateUrl: "./create-activity.component.html",
  styleUrls: ["./create-activity.component.css"],
})
export class CreateActivityComponent {
  activityForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(5)]],
  });

  @Output() canceled = new EventEmitter<boolean>();
  @Output() newActivity = new EventEmitter<Activity>();

  constructor(
    private formBuilder: FormBuilder,
    private activityService: ActivityService,
    private toastr: ToastrService
  ) {}

  createActivity(): void {
    if (this.activityForm?.valid) {
      let activity = new Activity(this.activityForm.value.name || "" || "");

      this.activityService.createActivity(activity).subscribe(
        (a) => {
          this.toastr.success("Activity created");
          this.activityForm.reset();
          this.onActivityCreated(activity);
        },
        (error) => {
          this.toastr.error("Error", "Something went wrong. " + error.message);
        }
      );
    }
  }

  cancelForm(): void {
    this.canceled.emit(false);
  }

  onActivityCreated(activity: Activity): void {
    this.newActivity.emit(activity);
  }
}
