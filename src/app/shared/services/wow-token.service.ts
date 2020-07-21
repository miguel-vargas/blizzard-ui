import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WowTokenResponse } from '@shared/models/wow-token-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WowTokenService {

  constructor(
    private http: HttpClient
  ) { }

  public getTokens(url: string): Observable<WowTokenResponse> {
    return this.http.get<WowTokenResponse>(url);
  }
}
