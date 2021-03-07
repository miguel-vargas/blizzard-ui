import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { EnvironmentService } from '@shared/services/environment.service';

import { WowTokenResponse } from '../models/wow-token-response';

@Injectable({
  providedIn: 'root'
})
export class WowTokenService {
  tokenUri: string;
  error$: Subject<boolean>;

  constructor(
    private environmentService: EnvironmentService,
    private http: HttpClient
  ) {
    this.tokenUri = this.environmentService.serviceUris.tokenUri;
    this.error$ = new Subject<boolean>();
  }

  public getTokens(): Observable<WowTokenResponse> {
    return this.http.get<WowTokenResponse>(this.tokenUri)
      .pipe(
        catchError((error) => {
          console.error('Error loading WoW Token Data', error);
          this.error$.next(true);
          return of(null);
        })
      );
  }
}
