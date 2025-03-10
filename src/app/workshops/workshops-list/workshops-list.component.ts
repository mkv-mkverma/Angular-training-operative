import { Component, OnInit } from '@angular/core';
import { WorkshopsService } from '../workshops.service';
import IWorkshop from '../models/IWorkshop';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from '../../common/loading-spinner/loading-spinner.component';
import { ErrorAlertComponent } from '../../common/error-alert/error-alert.component';
import { ItemComponent } from './item/item.component';
import { PaginationComponent } from '../../common/pagination/pagination.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workshops-list',
  standalone: true,
  imports: [
    NgbAlert,
    LoadingSpinnerComponent,
    ErrorAlertComponent,
    ItemComponent,
    PaginationComponent,
    FormsModule,
  ],
  templateUrl: './workshops-list.component.html',
  styleUrl: './workshops-list.component.scss',
})
export class WorkshopsListComponent implements OnInit {
  workshops!: IWorkshop[];
  loading = true;
  error: Error | null = null;
  page = 1;
  filterKey = 'Angular';
  filteredWorkshops!: IWorkshop[];
  constructor(
    private workshopsService: WorkshopsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParamMap.subscribe({
      next: (queryParams) => {
        const queryStr = queryParams.get('page');
        this.page = queryStr === null ? 1 : +queryStr;
        this.getWorkshops();
      },
      error: (error) => {
        error = error;
      },
    });
  }

  ngOnInit() {
    this.getWorkshops();
  }

  getWorkshops() {
    this.loading = true;
    this.workshopsService.fetchWorkshops(this.page).subscribe({
      next: (workshops) => {
        this.workshops = workshops;
        this.filteredWorkshops = workshops;
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

  filterWorkshops() {
    this.filteredWorkshops = this.workshops.filter((w) =>
      w.name.toLowerCase().includes(this.filterKey.toLowerCase())
    );
  }

  filterByCategory(category: string) {
    this.workshopsService.fetchWorkshops(this.page, category).subscribe({
      next: (workshops) => {
        this.workshops = workshops;
        // A better alternative: If you make `this.workshops` and `this.filterKey` as signals, you can compute `this.filteredWorkshops` automatically when either `this.workshops` changes or `this.filterKey` changes
        this.filterWorkshops();
      },
    });
  }

  changePage(newPage: number) {
    this.page = newPage;

    this.router.navigate(['/workshops'], {
      queryParams: {
        page: this.page,
      },
    });

    this.getWorkshops();
  }
}
