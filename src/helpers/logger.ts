/**
 * Logger utility module
 * This file is missing JSDoc comments for Workflow #5
 * Functions need proper documentation
 */

/**
 * Enumeration of available log levels in order of severity.
 * Lower numeric values represent more verbose logging.
 * 
 * @enum {number}
 * @readonly
 */
enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

/**
 * Logger class for structured application logging with configurable log levels.
 * Provides methods for logging at different severity levels (debug, info, warn, error)
 * with automatic timestamp formatting and prefix support.
 * 
 * @class
 * @example
 * ```typescript
 * const logger = new Logger('MyApp', LogLevel.DEBUG);
 * logger.info('Application started');
 * logger.error('An error occurred', new Error('Something went wrong'));
 * ```
 */
class Logger {
  private level: LogLevel;
  private prefix: string;

  /**
   * Creates a new Logger instance with the specified prefix and log level.
   * 
   * @param {string} [prefix='APP'] - The prefix to use for all log messages
   * @param {LogLevel} [level=LogLevel.INFO] - The minimum log level to output
   * @example
   * ```typescript
   * const logger = new Logger('MyService', LogLevel.DEBUG);
   * ```
   */
  constructor(prefix: string = 'APP', level: LogLevel = LogLevel.INFO) {
    this.prefix = prefix;
    this.level = level;
  }

  /**
   * Formats a log message with timestamp, prefix, and log level.
   * 
   * @private
   * @param {string} level - The log level string (e.g., 'INFO', 'ERROR')
   * @param {string} message - The message to format
   * @returns {string} The formatted log message with timestamp and prefix
   * @example
   * // Returns: '[2025-10-21T12:34:56.789Z] [APP] [INFO] User logged in'
   * formatMessage('INFO', 'User logged in');
   */
  private formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${this.prefix}] [${level}] ${message}`;
  }

  /**
   * Determines whether a message at the given log level should be logged
   * based on the current configured log level.
   * 
   * @private
   * @param {LogLevel} level - The log level to check
   * @returns {boolean} True if the message should be logged, false otherwise
   */
  private shouldLog(level: LogLevel): boolean {
    return level >= this.level;
  }

  /**
   * Logs a debug message. Only outputs if the logger's level is set to DEBUG.
   * Used for detailed diagnostic information.
   * 
   * @param {string} message - The debug message to log
   * @param {...any[]} args - Additional arguments to log
   * @returns {void}
   * @example
   * ```typescript
   * logger.debug('Processing request', { userId: 123, action: 'login' });
   * ```
   */
  debug(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.log(this.formatMessage('DEBUG', message), ...args);
    }
  }

  /**
   * Logs an informational message. Outputs if the logger's level is INFO or lower.
   * Used for general informational messages about application state.
   * 
   * @param {string} message - The info message to log
   * @param {...any[]} args - Additional arguments to log
   * @returns {void}
   * @example
   * ```typescript
   * logger.info('Server started on port 3000');
   * ```
   */
  info(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
      console.info(this.formatMessage('INFO', message), ...args);
    }
  }

  /**
   * Logs a warning message. Outputs if the logger's level is WARN or lower.
   * Used for potentially harmful situations that don't prevent the application from working.
   * 
   * @param {string} message - The warning message to log
   * @param {...any[]} args - Additional arguments to log
   * @returns {void}
   * @example
   * ```typescript
   * logger.warn('Deprecated API endpoint called', { endpoint: '/old/api' });
   * ```
   */
  warn(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn(this.formatMessage('WARN', message), ...args);
    }
  }

  /**
   * Logs an error message with optional Error object for stack trace.
   * Always outputs unless the logger's level is set higher than ERROR.
   * 
   * @param {string} message - The error message to log
   * @param {Error} [error] - Optional Error object to log with stack trace
   * @returns {void}
   * @example
   * ```typescript
   * try {
   *   // some code
   * } catch (err) {
   *   logger.error('Failed to process request', err as Error);
   * }
   * ```
   */
  error(message: string, error?: Error): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      console.error(this.formatMessage('ERROR', message));
      if (error) {
        console.error(error.stack || error.message);
      }
    }
  }

  /**
   * Sets the minimum log level for this logger instance.
   * Messages below this level will not be logged.
   * 
   * @param {LogLevel} level - The new log level to set
   * @returns {void}
   * @example
   * ```typescript
   * logger.setLevel(LogLevel.DEBUG); // Enable debug logging
   * logger.setLevel(LogLevel.ERROR); // Only log errors
   * ```
   */
  setLevel(level: LogLevel): void {
    this.level = level;
  }

  /**
   * Gets the current log level of this logger instance.
   * 
   * @returns {LogLevel} The current log level
   * @example
   * ```typescript
   * const currentLevel = logger.getLevel();
   * if (currentLevel === LogLevel.DEBUG) {
   *   console.log('Debug logging is enabled');
   * }
   * ```
   */
  getLevel(): LogLevel {
    return this.level;
  }
}

/**
 * Factory function to create a new Logger instance.
 * Provides a convenient way to create loggers without using the 'new' keyword.
 * 
 * @param {string} [prefix] - Optional prefix for all log messages
 * @param {LogLevel} [level] - Optional minimum log level
 * @returns {Logger} A new Logger instance
 * @example
 * ```typescript
 * const logger = createLogger('API', LogLevel.INFO);
 * logger.info('API initialized');
 * ```
 */
export function createLogger(prefix?: string, level?: LogLevel): Logger {
  return new Logger(prefix, level);
}

/**
 * Parses a string representation of a log level into a LogLevel enum value.
 * Case-insensitive. Returns LogLevel.INFO if the string doesn't match any known level.
 * 
 * @param {string} level - The log level string to parse (e.g., 'DEBUG', 'info', 'Error')
 * @returns {LogLevel} The corresponding LogLevel enum value, or LogLevel.INFO if invalid
 * @example
 * ```typescript
 * const level = parseLogLevel('DEBUG'); // Returns LogLevel.DEBUG
 * const level2 = parseLogLevel('unknown'); // Returns LogLevel.INFO (default)
 * ```
 */
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

/**
 * Formats an Error object into a readable string including name, message, and stack trace.
 * 
 * @param {Error} error - The Error object to format
 * @returns {string} A formatted string representation of the error with stack trace
 * @example
 * ```typescript
 * try {
 *   throw new Error('Something went wrong');
 * } catch (err) {
 *   const formatted = formatError(err as Error);
 *   console.log(formatted);
 *   // Output: 'Error: Something went wrong\n    at ...' (with full stack)
 * }
 * ```
 */
export function formatError(error: Error): string {
  return `${error.name}: ${error.message}\n${error.stack}`;
}

export { Logger, LogLevel };