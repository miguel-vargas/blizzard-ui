import { TestBed } from '@angular/core/testing';

import { WowTokenService } from './wow-token.service';

describe('WowTokenService', () => {
  let service: WowTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WowTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
