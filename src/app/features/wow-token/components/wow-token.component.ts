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

  constructor(
    private wowTokenService: WowTokenService
  ) { }

  ngOnInit(): void {
    this.tokenResponse$ = this.getTokens();
  }

  getTokens() {
    return this.wowTokenService.getTokens();
  }

}
