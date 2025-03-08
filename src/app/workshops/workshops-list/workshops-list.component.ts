import { Component, OnInit } from '@angular/core';
import { WorkshopsService } from '../workshops.service';
import IWorkshop from '../models/IWorkshop';

@Component({
  selector: 'app-workshops-list',
  standalone: true,
  imports: [],
  templateUrl: './workshops-list.component.html',
  styleUrl: './workshops-list.component.scss',
})
export class WorkshopsListComponent implements OnInit {
  workshops: IWorkshop[] = [];
  constructor(private workshopsService: WorkshopsService) {}

  ngOnInit() {
    this.workshops = this.workshopsService.getWorkshops();
    console.log(this.workshops);
  }
}
