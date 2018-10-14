import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export class SynchronizationEvent extends HttpResponse<number> {
  public requestStartTime: Date;
  public requestFinishTime: Date;

  public get requestTime(): number {
    return this.requestFinishTime.getTime() - this.requestStartTime.getTime();
  }

  constructor(response: HttpResponse<number>, requestStartTime: Date) {
    super();
    Object.assign(this, response);
    this.requestStartTime = requestStartTime;
    this.requestFinishTime = new Date();
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public synchronizationFinishEvent: EventEmitter<HttpResponseBase>;
  public synchronizationSuccessEvent: EventEmitter<SynchronizationEvent>;
  public synchronizationErrorEvent: EventEmitter<HttpErrorResponse>;

  constructor(
    private http: HttpClient
  ) {
    this.synchronizationFinishEvent = new EventEmitter<HttpResponseBase>();
    this.synchronizationSuccessEvent = new EventEmitter<SynchronizationEvent>();
    this.synchronizationErrorEvent = new EventEmitter<HttpErrorResponse>();
  }

  public synchronize(): void {
    const requestStartTime = new Date();
    this.http.request<number>('get', 'https://ahora.shisa.app', {
      observe: 'response'
    })
      .pipe(
        catchError(err => {
          this.synchronizationErrorEvent.next(err);
          return of(err);
        })
      )
      .subscribe((response: HttpResponseBase) => {
        this.synchronizationFinishEvent.next(response);
        if (response.ok) {
          this.synchronizationSuccessEvent.next(
            new SynchronizationEvent(response as HttpResponse<number>, requestStartTime)
          );
        }
      });
  }
}
