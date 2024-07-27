import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TravelersMainComponent } from "./travelers-main/travelers-main.component";
import { CreateTravelerComponent } from "./create-traveler/create-traveler.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TravelersMainComponent, CreateTravelerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TravelersMainComponent, CreateTravelerComponent],
})
export class TravelersModule {}
