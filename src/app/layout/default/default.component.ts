import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

declare class ScreenList {
  Xs?: string;
  GtXs?: string;

  Sm?: string;
  LtSm?: string;
  GtSm?: string;

  Md?: string;
  LtMd?: string;
  GtMd?: string;

  Lg?: string;
  LtLg?: string;
  GtLg?: string;

  Xl?: string;
  LtXl?: string;
}

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnDestroy {

  matchedScreenList: ScreenList = {};
  watcher: Subscription;
  toggleSidenav = true;

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
    this.watcher = this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      const LIST = {};
      changes.forEach(change => {
        LIST[change.suffix] = change.matches;
      });
      this.matchedScreenList = { ...LIST };
      console.log(this.matchedScreenList);
    });
  }

  toggleSidebar() {
    this.toggleSidenav = !this.toggleSidenav;
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
