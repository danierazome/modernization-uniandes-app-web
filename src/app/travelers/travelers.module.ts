import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelersMainComponent } from './travelers-main/travelers-main.component';
import { CreateTravelerComponent } from './create-traveler/create-traveler.component';



@NgModule({
  declarations: [
    TravelersMainComponent,
    CreateTravelerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TravelersModule { }
