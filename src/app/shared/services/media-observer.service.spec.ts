import { TestBed } from '@angular/core/testing';

import { MediaObserverService } from './media-observer.service';

describe('MediaObserverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaObserverService = TestBed.get(MediaObserverService);
    expect(service).toBeTruthy();
  });
});
