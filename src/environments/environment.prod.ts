import { Environment } from './model/environemnt';

export const environment: Environment = {
  production: true,
  enableDebugTools: false,
  logLevel: 'debug',
  tokenBackends: [
    {
      technology: '.NET Core 3.1',
      url: 'http://wowtoken.miguel-vargas.com/wow/tokens'
    },
    {
      technology: 'Spring Boot',
      url: 'http://wowtoken.miguel-vargas.com/wow/tokens'
    }
  ]
};
