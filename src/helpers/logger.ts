/**
 * Logger utility module
 * This file is missing JSDoc comments for Workflow #5
 * Functions need proper documentation
 */

enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

class Logger {
  private level: LogLevel;
  private prefix: string;

  constructor(prefix: string = 'APP', level: LogLevel = LogLevel.INFO) {
    this.prefix = prefix;
    this.level = level;
  }

  // Missing JSDoc comment
  private formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${this.prefix}] [${level}] ${message}`;
  }

  // Missing JSDoc comment
  private shouldLog(level: LogLevel): boolean {
    return level >= this.level;
  }

  // Missing JSDoc comment
  debug(message: string, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.log(this.formatMessage('DEBUG', message), ...args);
    }
  }

  // Missing JSDoc comment
  info(message: string, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
      console.info(this.formatMessage('INFO', message), ...args);
    }
  }

  // Missing JSDoc comment
  warn(message: string, ...args: unknown[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn(this.formatMessage('WARN', message), ...args);
    }
  }

  // Missing JSDoc comment
  error(message: string, error?: Error): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      console.error(this.formatMessage('ERROR', message));
      if (error) {
        console.error(error.stack || error.message);
      }
    }
  }

  // Missing JSDoc comment
  setLevel(level: LogLevel): void {
    this.level = level;
  }

  // Missing JSDoc comment
  getLevel(): LogLevel {
    return this.level;
  }
}

// Missing JSDoc comment
export function createLogger(prefix?: string, level?: LogLevel): Logger {
  return new Logger(prefix, level);
}

// Missing JSDoc comment
export function parseLogLevel(level: string): LogLevel {
  switch (level.toUpperCase()) {
  case 'DEBUG':
    return LogLevel.DEBUG;
  case 'INFO':
    return LogLevel.INFO;
  case 'WARN':
    return LogLevel.WARN;
  case 'ERROR':
    return LogLevel.ERROR;
  default:
    return LogLevel.INFO;
  }
}

// Missing JSDoc comment
export function formatError(error: Error): string {
  return `${error.name}: ${error.message}\n${error.stack}`;
}

export { Logger, LogLevel };