import { Injectable } from '@angular/core';
import { IEnvironment } from 'src/environments/ienvironemnt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements IEnvironment {
  get production() {
    return environment.production;
  }

  get enableDebugTools() {
    return environment.enableDebugTools;
  }

  get logLevel() {
    return environment.logLevel;
  }

  get dotNetCoreUrl() {
    return environment.dotNetCoreUrl;
  }

  get springbootUrl() {
    return environment.springbootUrl;
  }

  constructor() {}
}
