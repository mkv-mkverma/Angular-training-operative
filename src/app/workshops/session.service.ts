import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ISession from './models/ISession';
import { environment } from '../../environments/environment';
export type VoteType = 'upvote' | 'downvote';
@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  fetchSessionsForWorkshop(workshopId: number) {
    return this.http.get<ISession[]>(
      `${this.apiUrl}/workshops/${workshopId}/sessions`
    );
  }

  voteForSession(sessionId: number, voteType: VoteType) {
    return this.http.put<ISession>(
      `${this.apiUrl}/sessions/${sessionId}/${voteType}`,
      null // we generally pass data in put request. In this case we don't have any data
    );
  }
}
