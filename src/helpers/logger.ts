/**
 * Logger utility module
 * Provides structured logging with different log levels and formatted output
 */

/**
 * Enumeration of available log levels in order of severity
 * @enum {number}
 */
enum LogLevel {
  /** Detailed debug information */
  DEBUG = 0,
  /** General informational messages */
  INFO = 1,
  /** Warning messages for potentially harmful situations */
  WARN = 2,
  /** Error messages for failure events */
  ERROR = 3
}

/**
 * Logger class for structured logging with configurable log levels
 * @class
 */
class Logger {
  private level: LogLevel;
  private prefix: string;

  /**
   * Creates a new Logger instance
   * @param {string} prefix - The prefix to prepend to all log messages (default: 'APP')
   * @param {LogLevel} level - The minimum log level to display (default: LogLevel.INFO)
   * @example
   * const logger = new Logger('MyApp', LogLevel.DEBUG);
   * logger.info('Application started');
   */
  constructor(prefix: string = 'APP', level: LogLevel = LogLevel.INFO) {
    this.prefix = prefix;
    this.level = level;
  }

  /**
   * Formats a log message with timestamp, prefix, and log level
   * @private
   * @param {string} level - The log level as a string (e.g., 'INFO', 'ERROR')
   * @param {string} message - The log message to format
   * @returns {string} The formatted log message
   */
  private formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${this.prefix}] [${level}] ${message}`;
  }

  /**
   * Determines if a message at the given log level should be logged
   * @private
   * @param {LogLevel} level - The log level to check
   * @returns {boolean} True if the message should be logged, false otherwise
   */
  private shouldLog(level: LogLevel): boolean {
    return level >= this.level;
  }

  /**
   * Logs a debug message with optional additional arguments
   * @param {string} message - The debug message to log
   * @param {...any} args - Additional arguments to log
   * @returns {void}
   * @example
   * logger.debug('Variable value:', myVariable);
   */
  debug(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.log(this.formatMessage('DEBUG', message), ...args);
    }
  }

  /**
   * Logs an informational message with optional additional arguments
   * @param {string} message - The informational message to log
   * @param {...any} args - Additional arguments to log
   * @returns {void}
   * @example
   * logger.info('User logged in:', username);
   */
  info(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
      console.info(this.formatMessage('INFO', message), ...args);
    }
  }

  /**
   * Logs a warning message with optional additional arguments
   * @param {string} message - The warning message to log
   * @param {...any} args - Additional arguments to log
   * @returns {void}
   * @example
   * logger.warn('API response time exceeded threshold:', responseTime);
   */
  warn(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn(this.formatMessage('WARN', message), ...args);
    }
  }

  /**
   * Logs an error message with optional Error object for stack trace
   * @param {string} message - The error message to log
   * @param {Error} [error] - Optional Error object to log stack trace
   * @returns {void}
   * @example
   * logger.error('Failed to connect to database', dbError);
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
   * Sets the minimum log level for this logger instance
   * @param {LogLevel} level - The new log level
   * @returns {void}
   * @example
   * logger.setLevel(LogLevel.DEBUG); // Now debug messages will be shown
   */
  setLevel(level: LogLevel): void {
    this.level = level;
  }

  /**
   * Gets the current log level for this logger instance
   * @returns {LogLevel} The current log level
   * @example
   * const currentLevel = logger.getLevel();
   */
  getLevel(): LogLevel {
    return this.level;
  }
}

/**
 * Factory function to create a new Logger instance
 * @param {string} [prefix] - Optional prefix for log messages
 * @param {LogLevel} [level] - Optional minimum log level
 * @returns {Logger} A new Logger instance
 * @example
 * const logger = createLogger('API', LogLevel.WARN);
 * logger.warn('Rate limit approaching');
 */
export function createLogger(prefix?: string, level?: LogLevel): Logger {
  return new Logger(prefix, level);
}

/**
 * Parses a string log level into a LogLevel enum value
 * @param {string} level - The log level string to parse (case-insensitive)
 * @returns {LogLevel} The corresponding LogLevel enum value, defaults to INFO if unrecognized
 * @example
 * const level = parseLogLevel('debug'); // Returns LogLevel.DEBUG
 * const level = parseLogLevel('unknown'); // Returns LogLevel.INFO
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
 * Formats an Error object into a detailed string representation
 * @param {Error} error - The error object to format
 * @returns {string} A formatted string containing error name, message, and stack trace
 * @example
 * try {
 *   // some code
 * } catch (error) {
 *   console.log(formatError(error));
 * }
 */
export function formatError(error: Error): string {
  return `${error.name}: ${error.message}\n${error.stack}`;
}

export { Logger, LogLevel };