import { Component, Input } from '@angular/core';
import IWorkshop from '../../models/IWorkshop';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../../common/pipes/location.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [DatePipe, LocationPipe, RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() workshop!: IWorkshop;
}
