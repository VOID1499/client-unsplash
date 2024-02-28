import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let cloneRequest = req.clone({
    setHeaders: {
      Authorization: environment.acces_key,
    },
  });
  return next(cloneRequest);
};
