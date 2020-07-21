import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WowTokenService } from './wow-token.service';
import { WowTokenResponse } from '@shared/models/wow-token-response';

describe('WowTokenService', () => {
  let service: WowTokenService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(WowTokenService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTokens', () => {
    const testUrl = 'TESTURL';

    afterEach(() => {
      httpMock.verify();
    });

    it('should GET a WowTokenResponse from API', () => {
      const expectedResponse: WowTokenResponse = {
        wowTokens: [
          {
            region: 'us',
            price: '1200330000',
            lastUpdatedTimestamp: '1595364752000'
          },
          {
            region: 'eu',
            price: '1200330000',
            lastUpdatedTimestamp: '1595364752000'
          }
        ]
      }

      service.getTokens(testUrl).subscribe(res => {
        expect(res.wowTokens.length).toEqual(2);
        expect(res).toEqual(expectedResponse);
      });

      const req = httpMock.expectOne(testUrl);
      expect(req.request.method).toEqual('GET')
      req.flush(expectedResponse);
    });
  });
});
