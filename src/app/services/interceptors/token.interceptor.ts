
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = sessionStorage.getItem('token')
    if (token != null) {
      request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) })
    }
    return next.handle(request).pipe(tap((error: any) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          this.router.navigate(['/auth/login']);
        }
      }
    }));
  }
}

