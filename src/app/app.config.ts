import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { routes as workshopsRoutes } from './workshops/workshops.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    /*
        Order matters here - The route match is done one-by-one. App routes should be last, because it has the ** -> catch all (page not found)
    */
    provideRouter(workshopsRoutes),
    provideRouter(routes),
  ],
};
