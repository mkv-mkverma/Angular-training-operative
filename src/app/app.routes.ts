import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    // This is the default route (empty path), meaning when the user visits the base URL (http://localhost:4200/),
    // it will load the HomeComponent.
    path: '',
    component: HomeComponent,
    title: 'workshops app',
  },
  {
    path: 'home',
    // Redirects the user from /home to ' ' (the default route).
    redirectTo: '',
    // Ensures that the entire URL must match exactly. Without pathMatch: 'full', Angular might partially match routes incorrectly.
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page Not Found | Workshops App',
  },
];
