/**
 * Simple Todo App - Bonus Feature for Workflow Testing
 * Users can add features like "mark all as completed" or "filter by status"
 * This is intentionally simple to allow for easy feature additions
 */

export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
}

export class TodoApp {
  private todos: Todo[] = [];
  private nextId: number = 1;

  /**
   * Add a new todo item
   */
  addTodo(title: string, description?: string, priority: 'low' | 'medium' | 'high' = 'medium'): Todo {
    const todo: Todo = {
      id: this.nextId++,
      title,
      description,
      completed: false,
      createdAt: new Date(),
      priority
    };
    
    this.todos.push(todo);
    return todo;
  }

  /**
   * Get all todos
   */
  getAllTodos(): Todo[] {
    return [...this.todos];
  }

  /**
   * Get todo by ID
   */
  getTodoById(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  /**
   * Mark a specific todo as completed
   */
  completeTodo(id: number): boolean {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = true;
      return true;
    }
    return false;
  }

  /**
   * Delete a todo
   */
  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Get incomplete todos
   */
  getIncompleteTodos(): Todo[] {
    return this.todos.filter(todo => !todo.completed);
  }

  /**
   * Get completed todos
   */
  getCompletedTodos(): Todo[] {
    return this.todos.filter(todo => todo.completed);
  }

  // FEATURE REQUEST: Add a method to mark all todos as completed
  // This is intentionally missing for users to implement via workflows
  
  // FEATURE REQUEST: Add a method to get todos by priority
  // This is intentionally missing for users to implement via workflows
  
  // FEATURE REQUEST: Add a method to update todo details
  // This is intentionally missing for users to implement via workflows
  
  // FEATURE REQUEST: Add a method to clear all completed todos
  // This is intentionally missing for users to implement via workflows
}

// Sample usage (commented out for demo purposes)
/*
const app = new TodoApp();
app.addTodo('Fix bug in users.ts', 'TypeError when user not found', 'high');
app.addTodo('Add unit tests', 'Cover all math functions', 'medium');
app.addTodo('Update dependencies', 'Security vulnerabilities', 'high');
app.addTodo('Add documentation', 'JSDoc comments needed', 'low');
*/