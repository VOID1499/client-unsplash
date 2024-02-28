import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ActivatedRoute, provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
      withComponentInputBinding()
      ),
      
    provideHttpClient(
      withInterceptors([authInterceptor])
    )   
    
  ],
};
