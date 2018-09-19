import { TestBed, inject } from '@angular/core/testing';

import { UnsubscriptionService } from './unsubscription.service';

describe('UnsubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsubscriptionService]
    });
  });

  it('should be created', inject([UnsubscriptionService], (service: UnsubscriptionService) => {
    expect(service).toBeTruthy();
  }));
});
