import { TestBed } from '@angular/core/testing';

import { EnvironmentService } from './environment.service';
import { Environment } from 'src/environments/models/environemnt';

describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return production', () => {
    expect(service.production).toBeFalsy();
  });

  it('should return enableDebugTools', () => {
    expect(service.enableDebugTools).toBeFalsy();
  });

  it('should return logLevel', () => {
    expect(service.logLevel).toBeTruthy();
  });

  it('should return tokenBackends', () => {
    expect(service.tokenBackends).toBeTruthy();
  });
});
