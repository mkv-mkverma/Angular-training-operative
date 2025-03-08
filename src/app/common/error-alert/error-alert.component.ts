import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-alert',
  standalone: true,
  imports: [NgbAlert],
  templateUrl: './error-alert.component.html',
  styleUrl: './error-alert.component.scss',
})
export class ErrorAlertComponent implements OnChanges {
  @Input('error') error: Error | null = null;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const error: SimpleChange = changes['error'];
    if (error.currentValue) {
      console.error(error.currentValue);
    }
  }
}
