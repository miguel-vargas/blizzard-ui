import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WowTokenService } from './wow-token.service';

describe('WowTokenService', () => {
  let service: WowTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(WowTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
