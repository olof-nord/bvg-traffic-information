import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiKeyInterceptor } from './api-key.interceptor';
import { FgiService } from '@api/services/fgi.service';

describe('ApiKeyInterceptor', () => {
  let httpMock: HttpTestingController;
  let fgiService: FgiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        FgiService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiKeyInterceptor,
          multi: true
        }
      ]
    });

    fgiService = TestBed.inject(FgiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should add the API key to all outgoing requests', () => {

    fgiService.getFgi().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne({ method: 'get' });
    expect(httpRequest.request.params.has('apikey')).toBeTrue();

  });

});
