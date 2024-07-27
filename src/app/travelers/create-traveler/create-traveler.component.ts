import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Traveler } from "src/app/models/traveler/traveler_model";
import { TravelerService } from "src/app/services/traveler/traveler_service";

@Component({
  selector: "app-create-traveler",
  templateUrl: "./create-traveler.component.html",
  styleUrls: ["./create-traveler.component.css"],
})
export class CreateTravelerComponent {
  travelerForm = this.formBuilder.group({
    firstname: ["", [Validators.required, Validators.minLength(2)]],
    lastname: ["", [Validators.required, Validators.minLength(2)]],
  });

  @Output() canceled = new EventEmitter<boolean>();
  @Output() newTraveler = new EventEmitter<Traveler>();

  constructor(
    private formBuilder: FormBuilder,
    private travelerService: TravelerService,
    private toastr: ToastrService
  ) {}

  createTraveler(): void {
    if (this.travelerForm?.valid) {
      let traveler = new Traveler(
        this.travelerForm.value.firstname || "" || "",
        this.travelerForm.value.lastname || "" || ""
      );

      this.travelerService.createTraveler(traveler).subscribe(
        (t) => {
          this.toastr.success("Traveler created");
          this.travelerForm.reset();
          this.onTravelerCreated(traveler);
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

  onTravelerCreated(traveler: Traveler): void {
    this.newTraveler.emit(traveler);
  }
}
