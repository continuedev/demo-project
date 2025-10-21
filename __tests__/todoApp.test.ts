/**
 * Test suite for Todo App
 * Some tests are missing for features that haven't been implemented yet
 * Users can add these via workflows
 */

import { TodoApp } from '../src/bonus/todoApp';

describe('TodoApp', () => {
  let app: TodoApp;

  beforeEach(() => {
    app = new TodoApp();
  });

  describe('addTodo', () => {
    it('should add a new todo with default priority', () => {
      const todo = app.addTodo('Test todo');
      
      expect(todo.title).toBe('Test todo');
      expect(todo.completed).toBe(false);
      expect(todo.priority).toBe('medium');
      expect(todo.id).toBe(1);
    });

    it('should add a todo with custom priority', () => {
      const todo = app.addTodo('Urgent task', 'Fix critical bug', 'high');
      
      expect(todo.priority).toBe('high');
      expect(todo.description).toBe('Fix critical bug');
    });
  });

  describe('getAllTodos', () => {
    it('should return all todos', () => {
      app.addTodo('Todo 1');
      app.addTodo('Todo 2');
      app.addTodo('Todo 3');
      
      const todos = app.getAllTodos();
      expect(todos).toHaveLength(3);
    });

    it('should return empty array when no todos', () => {
      expect(app.getAllTodos()).toHaveLength(0);
    });
  });

  describe('getTodoById', () => {
    it('should return todo by ID', () => {
      const todo1 = app.addTodo('First');
      const todo2 = app.addTodo('Second');
      
      expect(app.getTodoById(1)).toEqual(todo1);
      expect(app.getTodoById(2)).toEqual(todo2);
    });

    it('should return undefined for non-existent ID', () => {
      expect(app.getTodoById(999)).toBeUndefined();
    });
  });

  describe('completeTodo', () => {
    it('should mark todo as completed', () => {
      const todo = app.addTodo('Complete me');
      
      const result = app.completeTodo(todo.id);
      
      expect(result).toBe(true);
      expect(app.getTodoById(todo.id)?.completed).toBe(true);
    });

    it('should return false for non-existent todo', () => {
      expect(app.completeTodo(999)).toBe(false);
    });
  });

  describe('deleteTodo', () => {
    it('should delete a todo', () => {
      const todo = app.addTodo('Delete me');
      
      const result = app.deleteTodo(todo.id);
      
      expect(result).toBe(true);
      expect(app.getTodoById(todo.id)).toBeUndefined();
      expect(app.getAllTodos()).toHaveLength(0);
    });

    it('should return false when deleting non-existent todo', () => {
      expect(app.deleteTodo(999)).toBe(false);
    });
  });

  describe('getIncompleteTodos', () => {
    it('should return only incomplete todos', () => {
      const todo1 = app.addTodo('Incomplete 1');
      const _todo2 = app.addTodo('Complete me');
      const todo3 = app.addTodo('Incomplete 2');
      
      app.completeTodo(_todo2.id);
      
      const incomplete = app.getIncompleteTodos();
      
      expect(incomplete).toHaveLength(2);
      expect(incomplete.map(t => t.id)).toEqual([todo1.id, todo3.id]);
    });
  });

  describe('getCompletedTodos', () => {
    it('should return only completed todos', () => {
      const todo1 = app.addTodo('Todo 1');
      app.addTodo('Todo 2');
      const todo3 = app.addTodo('Todo 3');
      
      app.completeTodo(todo1.id);
      app.completeTodo(todo3.id);
      
      const completed = app.getCompletedTodos();
      
      expect(completed).toHaveLength(2);
      expect(completed.map(t => t.id)).toEqual([todo1.id, todo3.id]);
    });
  });

  // TODO: Tests for features to be implemented via workflows
  
  describe.skip('markAllAsCompleted', () => {
    it('should mark all todos as completed', () => {
      // This test will be added when the feature is implemented
    });
  });

  describe.skip('getTodosByPriority', () => {
    it('should return todos filtered by priority', () => {
      // This test will be added when the feature is implemented
    });
  });

  describe.skip('updateTodo', () => {
    it('should update todo details', () => {
      // This test will be added when the feature is implemented
    });
  });

  describe.skip('clearCompleted', () => {
    it('should remove all completed todos', () => {
      // This test will be added when the feature is implemented
    });
  });
});