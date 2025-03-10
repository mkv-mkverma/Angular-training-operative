import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { LocationPipe } from '../../common/pipes/location.pipe';
import IWorkshop, { IModes } from '../models/IWorkshop';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { ErrorAlertComponent } from '../../common/error-alert/error-alert.component';
import { LoadingSpinnerComponent } from '../../common/loading-spinner/loading-spinner.component';
import { WorkshopsService } from '../workshops.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// this gives the individual icons we want to use
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-workshop-details',
  standalone: true,
  imports: [
    DatePipe,
    LocationPipe,
    ErrorAlertComponent,
    LoadingSpinnerComponent,
    FontAwesomeModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './workshop-details.component.html',
  styleUrl: './workshop-details.component.scss',
})
export class WorkshopDetailsComponent {
  loading = true;
  error: Error | null = null;
  workshop!: IWorkshop;
  workshopId!: number;
  icons = {
    // The below is just ES2015+ short for faCheckCircle: faCheckCircle,
    faCheckCircle,
    faTimesCircle,
  };

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
  getIconForMode(mode: keyof IModes) {
    return this.workshop.modes[mode]
      ? this.icons.faCheckCircle
      : this.icons.faTimesCircle;
  }
}
