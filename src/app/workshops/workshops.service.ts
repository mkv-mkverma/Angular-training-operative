import { Injectable } from '@angular/core';
import IWorkshop from './models/IWorkshop';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkshopsService {
  private apiUrl = environment.apiUrl;
  constructor(public http: HttpClient) {}

  fetchWorkshops(page: number = 1, category: string = '') {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    if (category !== '') {
      params.set('category', category);
    }

    return this.http.get<IWorkshop[]>(
      `${this.apiUrl}/workshops?${params.toString()}`
    );
  }

  fetchWorkshopById(workshopId: number) {
    return this.http.get<IWorkshop>(`${this.apiUrl}/workshops/${workshopId}`);
  }

  deleteWorkshopById(workshopId: number) {
    return this.http.delete<void>(`${this.apiUrl}/workshops/${workshopId}`);
  }
}
