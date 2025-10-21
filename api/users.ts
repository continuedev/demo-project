/**
 * User API module
 * This file contains an intentional TypeError bug for Workflow #1
 * Bug: Accessing property on potentially undefined object
 */

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

// Sample user data
const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'guest' }
];

/**
 * Get user by ID
 * BUG: This function doesn't handle the case when user is not found
 */
export function getUserById(id: number): User {
  const user = users.find(u => u.id === id);
  // TypeError will occur here when user is undefined
  return user;
}

/**
 * Get user's email
 * BUG: Accessing property on potentially undefined result
 */
export function getUserEmail(userId: number): string {
  const user = getUserById(userId);
  // This will throw TypeError if user doesn't exist
  return user.email;
}

/**
 * Check if user is admin
 * BUG: No null check before accessing role property
 */
export function isAdmin(userId: number): boolean {
  const user = getUserById(userId);
  // Another potential TypeError here
  return user.role === 'admin';
}

// Unused import that should be cleaned up (for Workflow #2)
import * as fs from 'fs';

// Console.log that should be removed (for Workflow #2)
console.log('Users API loaded');

/**
 * Format user display name
 * Missing proper formatting and has inconsistent spacing
 */
export function formatUserName(user: User): string {
    // Inconsistent indentation (for ESLint to catch)
    const displayName=user.name.toUpperCase();  // Missing spaces around =
  return displayName
  // Missing semicolon above (for Prettier to fix)
}

/**
 * Get all admin users
 * Returns an array of all users with the 'admin' role
 * @returns {User[]} Array of admin users
 */
export function getAllAdmins(): User[] {
  return users.filter(user => user.role === 'admin');
}