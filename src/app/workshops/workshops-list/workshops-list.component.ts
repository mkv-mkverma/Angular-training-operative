import { Component, OnInit } from '@angular/core';
import { WorkshopsService } from '../workshops.service';
import IWorkshop from '../models/IWorkshop';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from '../../common/loading-spinner/loading-spinner.component';
import { ErrorAlertComponent } from '../../common/error-alert/error-alert.component';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-workshops-list',
  standalone: true,
  imports: [
    NgbAlert,
    LoadingSpinnerComponent,
    ErrorAlertComponent,
    ItemComponent,
  ],
  templateUrl: './workshops-list.component.html',
  styleUrl: './workshops-list.component.scss',
})
export class WorkshopsListComponent implements OnInit {
  workshops!: IWorkshop[];
  loading = true;
  error: Error | null = null;
  page = 1;
  constructor(private workshopsService: WorkshopsService) {}

  ngOnInit() {
    this.getWorkshops();
  }

  getWorkshops() {
    this.loading = true;
    this.workshopsService.fetchWorkshops().subscribe({
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

  changePage(by: number) {
    if (this.page + by <= 0) {
      return;
    }
    this.page = this.page + by;
    this.getWorkshops();
  }
}
