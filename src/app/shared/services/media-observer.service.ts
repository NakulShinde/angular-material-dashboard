import { Injectable } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export declare class ScreenList {
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

@Injectable({
  providedIn: 'root'
})
export class MediaObserverService {
  constructor(public mediaObserver: MediaObserver) {}

  getMatchedScreenList(): Observable<ScreenList> {
    return this.mediaObserver.asObservable().pipe(
      map((changes: MediaChange[]) => {
        const LIST = {};
        changes.forEach(change => {
          LIST[change.suffix] = change.matches;
        });
        return { ...LIST };
      })
    );
  }
}
