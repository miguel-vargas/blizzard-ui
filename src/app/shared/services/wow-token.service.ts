import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WowTokenResponse } from '@shared/models/wow-token-response';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';

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
