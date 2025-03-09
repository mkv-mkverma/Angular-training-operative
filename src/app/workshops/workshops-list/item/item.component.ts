import { Component, Input } from '@angular/core';
import IWorkshop from '../../models/IWorkshop';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() workshop!: IWorkshop;
}
