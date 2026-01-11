import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from './search-pipe-pipe';
import { TodoService } from './todo-service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, SearchPipePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.loadTodos();
  }


}