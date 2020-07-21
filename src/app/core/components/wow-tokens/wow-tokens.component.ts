import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { WowTokenResponse } from '@shared/models/wow-token-response';
import { WowTokenService } from '@shared/services/wow-token.service';

@Component({
  selector: 'migs-tech-wow-tokens',
  templateUrl: './wow-tokens.component.html',
  styleUrls: ['./wow-tokens.component.scss']
})
export class WowTokensComponent implements OnInit {
  @Input() url;

  tokenResponse$: Observable<WowTokenResponse>;

  constructor(
    private wowTokenService: WowTokenService
  ) { }

  ngOnInit(): void {
    this.tokenResponse$ = this.getTokens();
  }

  getTokens() {
    return this.wowTokenService.getTokens(this.url);
  }

}
