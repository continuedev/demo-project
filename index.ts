/**
 * Entry point for Continue Workflows Demo
 * This file demonstrates how the various modules work together
 */

import { getUserById, getUserEmail, isAdmin } from './api/users';
import { add, subtract, multiply, divide } from './src/utils/math';
import { createLogger } from './src/helpers/logger';
import { TodoApp } from './src/bonus/todoApp';

// Initialize logger
const logger = createLogger('DEMO');

// Demo: Using the Users API (contains bugs!)
logger.info('Testing Users API...');
try {
  const user = getUserById(1);
  logger.info(`Found user: ${user.name}`);
  
  // This will cause an error with non-existent user
  const email = getUserEmail(999);
  logger.info(`User email: ${email}`);
} catch (error) {
  logger.error('Error in Users API', error as Error);
}

// Demo: Using Math utilities (needs tests!)
logger.info('Testing Math utilities...');
const result1 = add(10, 5);
const result2 = multiply(4, 7);
const result3 = divide(10, 2);
logger.info(`Math results: ${result1}, ${result2}, ${result3}`);

// Demo: Using Todo App (needs features!)
logger.info('Testing Todo App...');
const todoApp = new TodoApp();
todoApp.addTodo('Fix TypeError bug', 'In api/users.ts', 'high');
todoApp.addTodo('Add unit tests', 'For math utilities', 'medium');
todoApp.addTodo('Update dependencies', 'Security vulnerabilities', 'high');
todoApp.addTodo('Add documentation', 'Missing JSDoc comments', 'low');

const todos = todoApp.getAllTodos();
logger.info(`Created ${todos.length} todos`);

// Mark one as completed
todoApp.completeTodo(1);
const incomplete = todoApp.getIncompleteTodos();
logger.info(`${incomplete.length} todos remaining`);

// Export for testing
export { todoApp, logger };