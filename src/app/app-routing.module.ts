import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesMainComponent } from "./activities/activities-main/activities-main.component";
import { HomeComponent } from "./dashboard/home/home.component";
import { TravelersMainComponent } from "./travelers/travelers-main/travelers-main.component";

const routes: Routes = [
  {
    path: "activities",
    component: ActivitiesMainComponent,
    pathMatch: "full",
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "travelers",
    component: TravelersMainComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
