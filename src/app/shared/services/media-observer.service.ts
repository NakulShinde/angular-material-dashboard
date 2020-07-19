import { Injectable } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ScreenList } from '../interfaces/screen-list';

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
