import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Decorators is a typescript annotations and its comes from angular code
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'workshops-app';
  btnClickCount = 0;

  changeTitle() {
    this.title = 'workshop app for operative';
    this.btnClickCount++;
  }
}
