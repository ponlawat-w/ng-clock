import { Injectable } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DatePipe } from '@angular/common';
import { LanguageService } from './language.service';
import { ApiService, SynchronizationEvent } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  public now: Date = new Date();
  public clientDelay: number;
  public synchronized = false;
  public timerSubscription: Subscription;
  public serverTimeSubscription: Subscription;

  constructor(
    private languageService: LanguageService,
    private apiService: ApiService
  ) {
    this.timerSubscription = interval(200).subscribe(() => {
      this.now = this.clientDelay ?
        new Date(new Date().getTime() + this.clientDelay) : new Date();
    });

    this.serverTimeSubscription = this.apiService.synchronizationSuccessEvent
      .subscribe(timestamp => {
        this.subscribeSynchronization(timestamp);
      });
  }

  getDateString(date: Date = this.now): string {
    return new DatePipe(this.languageService.currentLocale.code)
      .transform(date, 'yyyy/MM/dd', '+0700', this.languageService.currentLocale.code);
  }

  getTimeString(date: Date = this.now): string {
    return new DatePipe(this.languageService.currentLocale.code)
      .transform(date, 'HH:mm:ss', '+0700', this.languageService.currentLocale.code);
  }

  subscribeSynchronization(result: SynchronizationEvent): void {
    const endTimestamp = result.requestFinishTime.getTime();
    const serverTimeOfEndTimestamp = result.body + Math.round(result.requestTime / 2);
    this.clientDelay = serverTimeOfEndTimestamp - endTimestamp;
    this.synchronized = true;
  }
}
