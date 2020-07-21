import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { WowToken } from '@shared/models/wow-token';
import { WowTokenResponse } from '@shared/models/wow-token-response';
import { EnvironmentService } from '@shared/services/environment.service';

@Component({
  selector: 'migs-tech-wow-tokens',
  templateUrl: './wow-tokens.component.html',
  styleUrls: ['./wow-tokens.component.scss']
})
export class WowTokensComponent implements OnInit, OnDestroy {
  @Input() url;

  tokens: WowToken[];
  subs: Subscription = new Subscription();

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this.getTokens().subscribe(res => {
        this.tokens = res.wowTokens;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getTokens() {
    return this.http.get<WowTokenResponse>(this.url);
  }

}
