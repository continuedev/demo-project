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
 */
export function getUserById(id: number): User | undefined {
  const user = users.find(u => u.id === id);
  return user;
}

/**
 * Get user's email
 */
export function getUserEmail(userId: number): string | undefined {
  const user = getUserById(userId);
  return user?.email;
}

/**
 * Check if user is admin
 */
export function isAdmin(userId: number): boolean {
  const user = getUserById(userId);
  return user?.role === 'admin';
}



/**
 * Format user display name
 */
export function formatUserName(user: User): string {
  const displayName = user.name.toUpperCase();
  return displayName;
}