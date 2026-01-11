import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todo: string = ""
  updatedTodo: Todo = new Todo('', false)
  updatedTodoIndex: number = 0
  deletedTodoIndex: number = 0
  todos: Todo[] = []
  isUpdateModeActive: boolean = false
  searchValue: string = ""

  loadTodos() {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", "[]")
      this.todos = []
    } else {
      this.todos = JSON.parse(localStorage.getItem("todos")!)
    }
  }

  saveTodo() {
    this.todos.push(new Todo(this.todo, false))

    localStorage.setItem("todos", JSON.stringify(this.todos))

    this.todo = ""
  }

  updateTodo() {

    this.todos[this.updatedTodoIndex] = this.updatedTodo
    this.isUpdateModeActive = false

    localStorage.setItem("todos", JSON.stringify(this.todos))

  }

  getTodo(index: any) {
    this.isUpdateModeActive = true
    this.updatedTodo = this.todos[index]
  }

  deleteTodo(index: any) {
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  deleteAllTodos() {
    this.todos = []
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  mark(index: any) {
    this.todos[index].isCompleted = this.todos[index].isCompleted == true ? false : true
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}

class Todo {
  text: string = ""
  isCompleted: boolean = false
  constructor(text: string, isCompleted: boolean) {
    this.text = text;
    this.isCompleted = isCompleted
  }
}
