import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { WowToken } from '@shared/models/wow-token';
import { WowTokenResponse } from '@shared/models/wow-token-response';
import { EnvironmentService } from '@shared/services/environment.service';

@Component({
  selector: 'migs-tech-dotnet-core-tokens',
  templateUrl: './dotnet-core-tokens.component.html',
  styleUrls: ['./dotnet-core-tokens.component.scss']
})
export class DotnetCoreTokensComponent implements OnInit, OnDestroy {
  tokens: WowToken[];
  subs: Subscription = new Subscription();

  constructor(
    private environment: EnvironmentService,
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
    return this.http.get<WowTokenResponse>(this.environment.dotNetCoreUrl);
  }

}
