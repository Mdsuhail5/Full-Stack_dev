/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    // Step 1: Initialize an empty array to store todos
    this.todos = [];
  }

  // Step 2: Add a todo to the list
  add(todo) {
    this.todos.push(todo);
  }

  // Step 3: Remove a todo by its index
  remove(indexOfTodo) {
    // Check if index is valid
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  // Step 4: Update a todo at given index
  update(index, updatedTodo) {
    // Check if index is valid
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  // Step 5: Get all todos
  getAll() {
    return this.todos;
  }

  // Step 6: Get todo at specific index
  get(indexOfTodo) {
    // Check if index is valid
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return undefined; // Return undefined if index is invalid
  }

  // Step 7: Clear all todos
  clear() {
    this.todos = [];
  }
}

// Demo code to test the Todo class
if (require.main === module) {
  console.log("📝 Todo List Demo");
  console.log("=================");

  // Step 1: Create a new Todo instance
  const todoList = new Todo();

  // Step 2: Add some todos
  console.log("➕ Adding todos:");
  todoList.add("Buy groceries");
  todoList.add("Walk the dog");
  todoList.add("Study JavaScript");
  console.log("All todos:", todoList.getAll());

  // Step 3: Get a specific todo
  console.log("\n🔍 Getting specific todo:");
  console.log("Todo at index 1:", todoList.get(1));

  // Step 4: Update a todo
  console.log("\n✏️ Updating todo:");
  todoList.update(1, "Walk the dog in the park");
  console.log("After update:", todoList.getAll());

  // Step 5: Remove a todo
  console.log("\n❌ Removing todo:");
  todoList.remove(0); // Remove "Buy groceries"
  console.log("After removal:", todoList.getAll());

  // Step 6: Add more todos
  console.log("\n➕ Adding more todos:");
  todoList.add("Read a book");
  todoList.add("Exercise");
  console.log("Updated list:", todoList.getAll());

  // Step 7: Clear all todos
  console.log("\n🗑️ Clearing all todos:");
  todoList.clear();
  console.log("After clear:", todoList.getAll());

  console.log("\n✅ Demo completed!");
}

module.exports = Todo;
