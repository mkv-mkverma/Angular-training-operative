import { Injectable } from '@angular/core';
import IWorkshop from './models/IWorkshop';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WorkshopsService {
  constructor(public http: HttpClient) {}

  fetchWorkshops(page: number = 1, category: string = '') {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    if (category !== '') {
      params.set('category', category);
    }

    return this.http.get<IWorkshop[]>(
      `https://workshops-server.onrender.com/workshops?${params.toString()}`
    );
  }
}
