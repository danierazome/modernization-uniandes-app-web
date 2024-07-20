import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

import { Traveler } from "src/app/models/traveler/traveler_model";

@Injectable({
  providedIn: "root",
})
export class TravelerService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllTravelers(): Observable<Traveler[]> {
    return this.http.get<Traveler[]>(`${this.apiUrl}/api/v1/traveler`);
  }

  createTraveler(traveler: Traveler): Observable<Traveler> {
    return this.http.post<Traveler>(`${this.apiUrl}/api/v1/traveler`, traveler);
  }
}
