import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class Http implements HttpInterceptor {

  constructor(private loader: LoaderService, private auth: AuthenticationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let userData = this.auth.userValue;
    let token: string = userData?.token || '';
    console.log(userData, 20)
    this.loader.show();
    const newHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "authorization": token,
      "Access-Control-Allow-Origin": '*',
      'Cache-control': 'no-cache',
      'Expires': '0',
      'Pragma': 'no-cache'
    });
    //clone request and change header
    let clone = request.clone({ headers: newHeaders });
    return next.handle(clone).pipe(finalize(() => { this.loader.hide(); }));
  }
}
