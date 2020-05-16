import { TestBed } from '@angular/core/testing';

import { DownloderService } from './downloder.service';

describe('DownloderService', () => {
  let service: DownloderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
