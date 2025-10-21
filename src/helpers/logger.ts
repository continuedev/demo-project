/**
 * Logger utility module providing structured logging functionality with configurable log levels.
 * @module logger
 */

/**
 * Enumeration of available log levels in ascending order of severity.
 * Lower values indicate more verbose logging.
 * @enum {number}
 */
enum LogLevel {
  /** Debug level - most verbose, for detailed diagnostic information */
  DEBUG = 0,
  /** Info level - general informational messages */
  INFO = 1,
  /** Warning level - potentially harmful situations */
  WARN = 2,
  /** Error level - error events that might still allow the application to continue */
  ERROR = 3
}

/**
 * Logger class providing structured logging with configurable log levels and prefixes.
 * All log messages are timestamped and formatted consistently.
 * @class
 */
class Logger {
  private level: LogLevel;
  private prefix: string;

  /**
   * Creates a new Logger instance.
   * @param {string} [prefix='APP'] - Prefix to include in all log messages for identification
   * @param {LogLevel} [level=LogLevel.INFO] - Minimum log level to output
   * @example
   * const logger = new Logger('MyApp', LogLevel.DEBUG);
   * logger.info('Application started');
   */
  constructor(prefix: string = 'APP', level: LogLevel = LogLevel.INFO) {
    this.prefix = prefix;
    this.level = level;
  }

  /**
   * Formats a log message with timestamp, prefix, and log level.
   * @private
   * @param {string} level - The log level as a string (e.g., 'DEBUG', 'INFO')
   * @param {string} message - The message to format
   * @returns {string} Formatted log message with timestamp and metadata
   */
  private formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${this.prefix}] [${level}] ${message}`;
  }

  /**
   * Determines whether a message at the given level should be logged based on the current log level.
   * @private
   * @param {LogLevel} level - The log level to check
   * @returns {boolean} True if the message should be logged, false otherwise
   */
  private shouldLog(level: LogLevel): boolean {
    return level >= this.level;
  }

  /**
   * Logs a debug message. Only outputs if logger level is set to DEBUG or lower.
   * @param {string} message - The debug message to log
   * @param {...any} args - Additional arguments to log
   * @returns {void}
   * @example
   * logger.debug('User data:', { id: 123, name: 'John' });
   */
  debug(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.log(this.formatMessage('DEBUG', message), ...args);
    }
  }

  /**
   * Logs an informational message. Only outputs if logger level is set to INFO or lower.
   * @param {string} message - The informational message to log
   * @param {...any} args - Additional arguments to log
   * @returns {void}
   * @example
   * logger.info('Application started successfully');
   */
  info(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.INFO)) {
      console.info(this.formatMessage('INFO', message), ...args);
    }
  }

  /**
   * Logs a warning message. Only outputs if logger level is set to WARN or lower.
   * @param {string} message - The warning message to log
   * @param {...any} args - Additional arguments to log
   * @returns {void}
   * @example
   * logger.warn('Deprecated API usage detected');
   */
  warn(message: string, ...args: any[]): void {
    if (this.shouldLog(LogLevel.WARN)) {
      console.warn(this.formatMessage('WARN', message), ...args);
    }
  }

  /**
   * Logs an error message with optional Error object. Always outputs unless logger level is disabled.
   * If an Error object is provided, includes the stack trace.
   * @param {string} message - The error message to log
   * @param {Error} [error] - Optional Error object to log with stack trace
   * @returns {void}
   * @example
   * logger.error('Failed to connect to database', new Error('Connection refused'));
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
   * Messages below this level will not be output.
   * @param {LogLevel} level - The new log level to set
   * @returns {void}
   * @example
   * logger.setLevel(LogLevel.ERROR); // Only error messages will be logged
   */
  setLevel(level: LogLevel): void {
    this.level = level;
  }

  /**
   * Gets the current log level of this logger instance.
   * @returns {LogLevel} The current log level
   * @example
   * const currentLevel = logger.getLevel();
   */
  getLevel(): LogLevel {
    return this.level;
  }
}

/**
 * Factory function to create a new Logger instance.
 * Provides a convenient way to instantiate loggers without using 'new' keyword.
 * @param {string} [prefix] - Optional prefix for log messages
 * @param {LogLevel} [level] - Optional minimum log level
 * @returns {Logger} A new Logger instance
 * @example
 * const logger = createLogger('MyService', LogLevel.DEBUG);
 * logger.info('Service initialized');
 */
export function createLogger(prefix?: string, level?: LogLevel): Logger {
  return new Logger(prefix, level);
}

/**
 * Parses a string log level name into a LogLevel enum value.
 * Case-insensitive. Defaults to INFO for unrecognized values.
 * @param {string} level - The log level string to parse (e.g., 'debug', 'INFO')
 * @returns {LogLevel} The corresponding LogLevel enum value, or LogLevel.INFO if unrecognized
 * @example
 * const level = parseLogLevel('ERROR'); // Returns LogLevel.ERROR
 * const defaultLevel = parseLogLevel('invalid'); // Returns LogLevel.INFO
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
 * @param {Error} error - The Error object to format
 * @returns {string} Formatted error string with name, message, and stack trace
 * @example
 * try {
 *   throw new Error('Something went wrong');
 * } catch (err) {
 *   const formatted = formatError(err as Error);
 *   console.log(formatted);
 * }
 */
export function formatError(error: Error): string {
  return `${error.name}: ${error.message}\n${error.stack}`;
}

export { Logger, LogLevel };