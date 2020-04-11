import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable} from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Add the BVG API key to each request
    request = request.clone({
      setParams: {
        'apikey': environment.BVG_API_KEY
      }
    });

    return next.handle(request);
  }
}
