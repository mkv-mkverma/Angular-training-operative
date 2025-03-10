import { AddWorkshopComponent } from './add-workshop/add-workshop.component';
import { WorkshopsListComponent } from './workshops-list/workshops-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { Routes } from '@angular/router';
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component';
import { SessionsListComponent } from './workshop-details/sessions-list/sessions-list.component';
import { AddSessionComponent } from './workshop-details/add-session/add-session.component';

export const routes: Routes = [
  {
    path: 'workshops',
    component: WorkshopsListComponent,
    title: 'List of workshops',
  },
  {
    path: 'workshops/add',
    component: AddWorkshopComponent,
    title: 'Add a workshop',
  },
  {
    path: 'workshops/favorites',
    component: FavoritesComponent,
    title: 'Edit a workshop',
  },
  {
    path: 'workshops/:id',
    component: WorkshopDetailsComponent,
    title: 'Workshop Details',
    children: [
      {
        path: '',
        component: SessionsListComponent,
      },
      {
        path: 'add-session',
        component: AddSessionComponent,
      },
    ],
  },
];
