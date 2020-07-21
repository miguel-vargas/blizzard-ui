import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/model/environemnt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements Environment {
  get production() {
    return environment.production;
  }

  get enableDebugTools() {
    return environment.enableDebugTools;
  }

  get logLevel() {
    return environment.logLevel;
  }

  get tokenBackends() {
    return environment.tokenBackends;
  }

  constructor() {}
}
