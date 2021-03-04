import { Environment } from './models/environemnt';

export const environment: Environment = {
  production: true,
  enableDebugTools: false,
  logLevel: 'debug',
  serviceUris: {
    tokenUri: 'https://localhost:49153/wow/tokens'
  },
};
