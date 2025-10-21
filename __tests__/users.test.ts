/**
 * Test suite for Users API
 * Comprehensive unit tests with edge cases and error handling
 */

import { getUserById, getUserEmail, isAdmin, formatUserName } from '../api/users';

describe('Users API', () => {
  describe('getUserById', () => {
    it('should return a user when given a valid ID', () => {
      const user = getUserById(1);
      expect(user).toBeDefined();
      expect(user?.name).toBe('Alice Johnson');
      expect(user?.id).toBe(1);
      expect(user?.email).toBe('alice@example.com');
      expect(user?.role).toBe('admin');
    });

    it('should handle non-existent user ID gracefully', () => {
      const user = getUserById(999);
      expect(user).toBeUndefined();
    });

    it('should return correct user for each valid ID', () => {
      const user2 = getUserById(2);
      expect(user2?.name).toBe('Bob Smith');
      expect(user2?.role).toBe('user');

      const user3 = getUserById(3);
      expect(user3?.name).toBe('Charlie Brown');
      expect(user3?.role).toBe('guest');
    });

    it('should handle negative ID values', () => {
      const user = getUserById(-1);
      expect(user).toBeUndefined();
    });

    it('should handle zero as ID', () => {
      const user = getUserById(0);
      expect(user).toBeUndefined();
    });
  });

  describe('getUserEmail', () => {
    it('should return email for existing user', () => {
      const email = getUserEmail(2);
      expect(email).toBe('bob@example.com');
    });

    it('should return email for admin user', () => {
      const email = getUserEmail(1);
      expect(email).toBe('alice@example.com');
    });

    it('should return undefined for non-existent user', () => {
      const email = getUserEmail(999);
      expect(email).toBeUndefined();
    });

    it('should not throw error for invalid user ID', () => {
      expect(() => getUserEmail(999)).not.toThrow();
    });

    it('should handle negative user IDs', () => {
      const email = getUserEmail(-5);
      expect(email).toBeUndefined();
    });
  });

  describe('isAdmin', () => {
    it('should return true for admin user', () => {
      expect(isAdmin(1)).toBe(true);
    });

    it('should return false for non-admin user', () => {
      expect(isAdmin(2)).toBe(false);
    });

    it('should return false for guest user', () => {
      expect(isAdmin(3)).toBe(false);
    });

    it('should return false for non-existent user', () => {
      expect(isAdmin(999)).toBe(false);
    });

    it('should not throw error when checking non-existent user', () => {
      expect(() => isAdmin(999)).not.toThrow();
    });

    it('should return false for negative user IDs', () => {
      expect(isAdmin(-1)).toBe(false);
    });
  });

  describe('formatUserName', () => {
    it('should format user name to uppercase', () => {
      const user = { id: 1, name: 'john doe', email: 'john@test.com', role: 'user' as const };
      expect(formatUserName(user)).toBe('JOHN DOE');
    });

    it('should format existing user names correctly', () => {
      const user1 = getUserById(1);
      if (user1) {
        expect(formatUserName(user1)).toBe('ALICE JOHNSON');
      }
    });

    it('should handle single-word names', () => {
      const user = { id: 5, name: 'Alice', email: 'alice@test.com', role: 'admin' as const };
      expect(formatUserName(user)).toBe('ALICE');
    });

    it('should handle names with special characters', () => {
      const user = { id: 6, name: "O'Brien", email: 'obrien@test.com', role: 'user' as const };
      expect(formatUserName(user)).toBe("O'BRIEN");
    });
  });
});