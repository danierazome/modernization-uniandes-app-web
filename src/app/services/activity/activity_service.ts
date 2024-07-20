import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

import { Activity } from "src/app/models/activity/activity_model";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.apiUrl}/api/v1/activity`);
  }

  createActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(`${this.apiUrl}/api/v1/activity`, activity);
  }
}
