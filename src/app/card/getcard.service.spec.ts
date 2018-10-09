import { TestBed, inject } from '@angular/core/testing';

import { GetcardService } from './getcard.service';

describe('GetcardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcardService]
    });
  });

  it('should be created', inject([GetcardService], (service: GetcardService) => {
    expect(service).toBeTruthy();
  }));
});
