import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Traveler } from "src/app/models/traveler/traveler_model";
import { TravelerService } from "src/app/services/traveler/traveler_service";

@Component({
  selector: "app-travelers-main",
  templateUrl: "./travelers-main.component.html",
  styleUrls: ["./travelers-main.component.css"],
})
export class TravelersMainComponent implements OnInit {
  travelers: Traveler[] = [];
  createTravelerOn: boolean = false;

  constructor(
    private travelerService: TravelerService,
    private routerPath: Router
  ) {}

  ngOnInit() {
    this.travelerService.getAllTravelers().subscribe((t) => {
      this.travelers = t;
    });
  }

  createNewTraveler(): void {
    if (!this.createTravelerOn) {
      this.createTravelerOn = true;
    }
  }

  onCanceledForm(v: boolean) {
    this.createTravelerOn = v;
  }

  onTravelerCreated(traveler: Traveler) {
    this.travelers.push(traveler);
  }

  routToHome(): void {
    this.routerPath.navigate(["/"]);
  }
}
