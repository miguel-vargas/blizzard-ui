import { Injectable } from '@angular/core';
import { Environment, LogLevel } from 'src/environments/models/environemnt';
import { environment } from 'src/environments/environment';
import { ServiceUris } from 'src/environments/models/service-uris';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements Environment {
  get production(): boolean {
    return environment.production;
  }

  get enableDebugTools(): boolean {
    return environment.enableDebugTools;
  }

  get logLevel(): LogLevel {
    return environment.logLevel;
  }

  get serviceUris(): ServiceUris {
    return environment.serviceUris;
  }

  constructor() {}
}
