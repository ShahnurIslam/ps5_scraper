export enum LogLevel {
    Emergency = 600,
    Alert     = 550,
    Critical  = 500,
    Error     = 400,
    Warning   = 300,
    Notice    = 250,
    Info      = 200,
    Debug     = 100
  }
  
  export class Logger {
    constructor(private level: LogLevel) {
    }
  
    alert(message: string, context?: object) {
      this.log(LogLevel.Alert, message, context);
    }
  
    critical(message: string, context?: object) {
      this.log(LogLevel.Critical, message, context);
    }
  
    debug(message: string, context?: object) {
      this.log(LogLevel.Debug, message, context);
    }
  
    emergency(message: string, context?: object): void {
      this.log(LogLevel.Emergency, message, context);
    }
  
    error(message: string, context?: object): void {
      this.log(LogLevel.Error, message, context);
    }
  
    info(message: string, context?: object): void {
      this.log(LogLevel.Info, message, context);
    }
  
    notice(message: string, context?: object): void {
      this.log(LogLevel.Notice, message, context);
    }
  
    warning(message: string, context?: object): void {
      this.log(LogLevel.Warning, message, context);
    }
  
  
    log(level: LogLevel, message: string, context?: object) {
      if (this.level > level) {
        return;
      }
      console.log(`[${(new Date()).toISOString()}] ${Logger.getLevelName(level)}: ${message} ${context ? JSON.stringify(context) : ''}`);
    }
  
    private static getLevelName(level: LogLevel) {
      return LogLevel[level];
    }
  }