import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { mockResponseBody } from './mock.response';

@Injectable()
export class HttpMockApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Return a static body for failed requests
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Error intercepted, mock data is provided instead ', error);

        return of(new HttpResponse({
          status: 200, body: mockResponseBody
        }));
      })
    );
  }
}
