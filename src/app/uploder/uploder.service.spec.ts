import { UploaderService } from './uploder.service';
import { TestBed } from '@angular/core/testing';


describe('UploderService', () => {
  let service: UploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
