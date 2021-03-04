import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnvironmentService } from '@shared/services/environment.service';

import { WowTokenResponse } from '../models/wow-token-response';

@Injectable({
  providedIn: 'root'
})
export class WowTokenService {
  tokenUri: string;

  constructor(
    private environmentService: EnvironmentService,
    private http: HttpClient
  ) {
    this.tokenUri = this.environmentService.serviceUris.tokenUri;
  }

  public getTokens(): Observable<WowTokenResponse> {
    return this.http.get<WowTokenResponse>(this.tokenUri);
  }
}
