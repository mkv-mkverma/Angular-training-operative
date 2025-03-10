import { Component, EventEmitter, Input, Output } from '@angular/core';
import IWorkshop from '../../models/IWorkshop';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../../common/pipes/location.pipe';
import { RouterLink } from '@angular/router';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [DatePipe, LocationPipe, RouterLink, FontAwesomeModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() workshop!: IWorkshop;
  icons = {
    faPencil,
    faTrash,
  };
  @Output() delete = new EventEmitter();

  onDeleteWorkshop() {
    this.delete.emit();
  }
}
