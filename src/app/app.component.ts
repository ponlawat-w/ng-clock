import { Component } from '@angular/core';
import { TimeService } from './services/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public timeService: TimeService) {}
}
