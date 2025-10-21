/**
 * Test suite for Users API
 * This test file will fail due to the TypeError bug in api/users.ts
 * Used for Workflow #1 - Bug Fixing
 */

import { getUserById, getUserEmail, isAdmin, formatUserName } from '../api/users';

describe('Users API', () => {
  describe('getUserById', () => {
    it('should return a user when given a valid ID', () => {
      const user = getUserById(1);
      expect(user).toBeDefined();
      expect(user.name).toBe('Alice Johnson');
    });

    // This test will FAIL due to the bug!
    it('should handle non-existent user ID gracefully', () => {
      const user = getUserById(999);
      expect(user).toBeUndefined();
    });
  });

  describe('getUserEmail', () => {
    it('should return email for existing user', () => {
      const email = getUserEmail(2);
      expect(email).toBe('bob@example.com');
    });

    // This test will FAIL - TypeError!
    it('should handle non-existent user', () => {
      expect(() => getUserEmail(999)).not.toThrow();
    });
  });

  describe('isAdmin', () => {
    it('should return true for admin user', () => {
      expect(isAdmin(1)).toBe(true);
    });

    it('should return false for non-admin user', () => {
      expect(isAdmin(2)).toBe(false);
    });

    // This test will FAIL - TypeError!
    it('should handle non-existent user', () => {
      expect(() => isAdmin(999)).not.toThrow();
    });
  });

  describe('formatUserName', () => {
    it('should format user name to uppercase', () => {
      const user = { id: 1, name: 'john doe', email: 'john@test.com', role: 'user' as const };
      expect(formatUserName(user)).toBe('JOHN DOE');
    });
  });
});
