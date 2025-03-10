import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { LocationPipe } from '../../common/pipes/location.pipe';
import IWorkshop from '../models/IWorkshop';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorAlertComponent } from '../../common/error-alert/error-alert.component';
import { LoadingSpinnerComponent } from '../../common/loading-spinner/loading-spinner.component';
import { WorkshopsService } from '../workshops.service';

@Component({
  selector: 'app-workshop-details',
  standalone: true,
  imports: [
    DatePipe,
    LocationPipe,
    ErrorAlertComponent,
    LoadingSpinnerComponent,
  ],
  templateUrl: './workshop-details.component.html',
  styleUrl: './workshop-details.component.scss',
})
export class WorkshopDetailsComponent {
  loading = true;
  error: Error | null = null;
  workshop!: IWorkshop;
  workshopId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private workshopsService: WorkshopsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.paramMap.subscribe({
      next: (params: any) => {
        this.workshopId = +params.get('id');

        this.workshopsService.fetchWorkshopById(this.workshopId).subscribe({
          next: (workshop) => {
            this.workshop = workshop;
            this.loading = false;
          },
          error: (error) => {
            this.error = error;
            this.loading = false;
          },
        });
      },
    });
  }
}
