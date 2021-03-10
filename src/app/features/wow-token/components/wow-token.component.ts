import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { WowTokenService } from '../services/wow-token.service';
import { WowTokenResponse } from '../models/wow-token-response';

@Component({
  selector: 'migs-tech-wow-token',
  templateUrl: './wow-token.component.html',
  styleUrls: ['./wow-token.component.scss']
})
export class WowTokenComponent implements OnInit {
  tokenResponse$: Observable<WowTokenResponse>;
  error$: Observable<boolean>;

  constructor(
    private wowTokenService: WowTokenService
  ) { }

  ngOnInit(): void {
    this.getTokens();
    this.error$ = this.wowTokenService.error$;
  }

  getTokens(): void {
    this.tokenResponse$ = this.wowTokenService.getTokens();
  }

  getTokenOnRefresh() {
    this.tokenResponse$ = this.wowTokenService.getTokens();
  }

}
