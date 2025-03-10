import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ISession from './models/ISession';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient) {}

  fetchSessionsForWorkshop(workshopId: number) {
    return this.http.get<ISession[]>(
      `https://workshops-server.onrender.com/workshops/${workshopId}/sessions`
    );
  }
}
