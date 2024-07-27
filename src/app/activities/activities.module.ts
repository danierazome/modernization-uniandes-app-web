import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivitiesMainComponent } from "./activities-main/activities-main.component";
import { CreateActivityComponent } from "./create-activity/create-activity.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ActivitiesMainComponent, CreateActivityComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ActivitiesMainComponent, CreateActivityComponent],
})
export class ActivitiesModule {}
