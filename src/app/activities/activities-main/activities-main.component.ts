import { Component, OnInit } from "@angular/core";
import { Activity } from "src/app/models/activity/activity_model";
import { ActivityService } from "src/app/services/activity/activity_service";
import { Router } from "@angular/router";

@Component({
  selector: "app-activities-main",
  templateUrl: "./activities-main.component.html",
  styleUrls: ["./activities-main.component.css"],
})
export class ActivitiesMainComponent implements OnInit {
  activities: Activity[] = [];
  createActivityOn: boolean = false;

  constructor(
    private activityService: ActivityService,
    private routerPath: Router
  ) {}

  ngOnInit() {
    this.activityService.getAllActivities().subscribe((a) => {
      this.activities = a;
    });
  }

  createNewActivity(): void {
    this.createActivityOn = true;
  }

  onCanceledForm(v: boolean) {
    this.createActivityOn = v;
  }

  onActivityCreated(activity: Activity) {
    this.activities.push(activity);
  }

  routToHome(): void {
    this.routerPath.navigate(["/"]);
  }
}
