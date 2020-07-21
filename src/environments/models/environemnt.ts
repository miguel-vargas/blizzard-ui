import { Backend } from './backend';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface Environment {
    production: boolean;
    
    // Enables use of ng.profiler.timeChangeDetection(); in browser console
    enableDebugTools: boolean;
    logLevel: LogLevel;
    tokenBackends: Backend[];
}