import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class TestInterceptor2 implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req);
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('Interceptor - Response:', event);
        }
      })
    );
  }
}
