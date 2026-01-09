import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  todo:string = ""
  updatedTodo:string = ""
  updatedTodoIndex:number = 0
  deletedTodoIndex:number = 0
  todos:string[] = []
  isUpdateModeActive:boolean = false

  saveTodo(){
    this.todos.push(this.todo)

    this.todo = ""
  }

  updateTodo(){

    this.todos[this.updatedTodoIndex] = this.updatedTodo
    this.isUpdateModeActive = false

  }

  getTodo(index:any){
    this.isUpdateModeActive = true
    this.updatedTodo = this.todos[index]
  }

  deleteTodo(index:any){
    this.todos.splice(index, 1)
  }

  deleteAllTodos(){
    this.todos = []
  }

}
