import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
// Decorators is a typescript annotations and its comes from angular code
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbAlertModule, CommonModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'workshops-app';
  public btnClickCount = 0;
  isOpen = true;

  changeTitle() {
    this.title = 'workshop app for operative';
    this.btnClickCount++;
    this.isOpen = true;
  }

  isToggle() {
    this.isOpen = !this.isOpen;
  }
}
