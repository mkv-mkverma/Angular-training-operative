import { Component, OnInit } from '@angular/core';
import { WorkshopsService } from '../workshops.service';
import IWorkshop from '../models/IWorkshop';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from '../../common/loading-spinner/loading-spinner.component';
import { ErrorAlertComponent } from '../../common/error-alert/error-alert.component';

@Component({
  selector: 'app-workshops-list',
  standalone: true,
  imports: [NgbAlert, LoadingSpinnerComponent, ErrorAlertComponent],
  templateUrl: './workshops-list.component.html',
  styleUrl: './workshops-list.component.scss',
})
export class WorkshopsListComponent implements OnInit {
  workshops!: IWorkshop[];
  loading = true;
  error: Error | null = null;
  constructor(private workshopsService: WorkshopsService) {}

  ngOnInit() {
    this.workshopsService.getWorkshops().subscribe({
      next: (workshops) => {
        this.workshops = workshops;
        this.loading = false;
        console.log(workshops);
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
        console.log(err);
      },
    });
    console.log(this.workshops);
  }
}
