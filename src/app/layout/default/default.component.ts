import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  MediaObserverService,
  ScreenList
} from 'src/app/shared/services/media-observer.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnDestroy {
  matchedScreenList: ScreenList = {};
  watcher: Subscription;
  toggleSidenav = true;

  constructor(private media: MediaObserverService) {}

  ngOnInit() {
    this.watcher = this.media
      .getMatchedScreenList()
      .subscribe(matchedScreens => {
        this.matchedScreenList = { ...matchedScreens };
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
