import { forwardRef, NgModule, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockApiInterceptor } from './mock.interceptor';

export const MOCK_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => HttpMockApiInterceptor),
  multi: true
};

@NgModule({
  providers: [
    HttpMockApiInterceptor,
    MOCK_INTERCEPTOR_PROVIDER
  ]
})
export class MockModule { }
