interface Todo {
    id: number;
    task: string;
    completed: boolean;
  }

  class TodoListManager {
    private todos: Todo[] = [];
    private nextId: number = 1;
    addTask(task: string): void {
      const newTodo: Todo = {
        id: this.nextId++,
        task: task,
        completed: false
      };
      this.todos.push(newTodo);
      console.log(`Task added: ${task}`);
    }
    getTasks(): Todo[] {
      return this.todos;
    }
    completeTask(id: number): void {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.completed = true;
        console.log(`Task completed: ${todo.task}`);
      } else {
        console.log(`Task with id ${id} not found.`);
      }
    }
  }
  // Test the functionality
  const todoList = new TodoListManager();
  todoList.addTask("Learn TypeScript");
  todoList.addTask("Build a To-Do List App");
  console.log(todoList.getTasks());
  todoList.completeTask(1);
  console.log(todoList.getTasks());