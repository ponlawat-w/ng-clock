import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabs = [
    'tabSynchronize'
  ];
  currentTab = this.tabs[0];

  constructor() { }

  ngOnInit() {
  }

  changeTab(tab: string) {
    this.currentTab = tab;
  }

}
