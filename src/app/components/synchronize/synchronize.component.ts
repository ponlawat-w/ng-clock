import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService, SynchronizationEvent } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-synchronize',
  templateUrl: './synchronize.component.html',
  styleUrls: ['./synchronize.component.css']
})
export class SynchronizeComponent implements OnInit, OnDestroy {

  synchronizing = false;
  synchronized = false;
  synchronizationTooLong = false;

  synchronizationFinishSubscription: Subscription;
  synchronizationSuccessSubscription: Subscription;
  synchronizationErrorSubscription: Subscription;

  constructor(
    private apiService: ApiService,
    private timeService: TimeService
  ) { }

  get clientDelay(): string {
    return (this.timeService.clientDelay / 1000).toPrecision(2);
  }

  _requestTime: number;
  get requestTime(): string {
    return (this._requestTime / 1000).toPrecision(2);
  }

  requestError: HttpErrorResponse;
  get requestErrorMessage(): string {
    return `${this.requestError.status} - ${this.requestError.statusText}`;
  }

  ngOnInit() {
    this.synchronizationFinishSubscription = this.apiService.synchronizationFinishEvent
      .subscribe(() => {
        this.synchronizing = false;
      });

    this.synchronizationSuccessSubscription = this.apiService.synchronizationSuccessEvent
      .subscribe((event: SynchronizationEvent) => {
        this.synchronized = true;
        this.synchronizationTooLong = event.requestTime > 1000;
        this._requestTime = event.requestTime;
      });

    this.synchronizationErrorSubscription = this.apiService.synchronizationErrorEvent
      .subscribe((event: HttpErrorResponse) => {
        this.requestError = event;
      });
  }

  ngOnDestroy() {
    this.synchronizationFinishSubscription.unsubscribe();
    this.synchronizationSuccessSubscription.unsubscribe();
    this.synchronizationErrorSubscription.unsubscribe();
  }

  synchronize(): void {
    this.synchronizing = true;
    this.synchronizationTooLong = false;
    this.requestError = null;
    this.apiService.synchronize();
  }

  abs(x: number): number {
    return Math.abs(x);
  }

}
