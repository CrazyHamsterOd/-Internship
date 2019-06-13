import {Component, OnInit} from '@angular/core';
import {TodoInterface} from '../config/interfaces/todo.interface';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // public checked = true;
  // public value = 'test';
  public todos: TodoInterface[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.todos;
  }

  public createTodo(todo: TodoInterface): void {
    this.todoService.addTodo(todo);
    this.todos = this.todoService.todos;
  }

  public updateTodo(todo: TodoInterface): void {
    this.todoService.updateTodo(todo);
    this.todos = this.todoService.todos;
  }

  public deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.todos;
  }

}
