import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MediaObserverService } from 'src/app/shared/services/media-observer.service';
import { ScreenList } from 'src/app/shared/interfaces/screen-list';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnDestroy {
  matchedScreenList: ScreenList = {};
  watcher: Subscription;
  toggleSidenav = true;

  constructor(private media: MediaObserverService) { }

  ngOnInit() {
    this.watcher = this.media
      .getMatchedScreenList()
      .subscribe(matchedScreens => {
        this.matchedScreenList = { ...matchedScreens };
      });
  }

  toggleSidebar() {
    this.toggleSidenav = !this.toggleSidenav;
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
