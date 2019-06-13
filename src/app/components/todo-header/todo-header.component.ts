import {Component, EventEmitter, Output} from '@angular/core';
import {TodoInterface} from '../../../config/interfaces/todo.interface';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent {
  @Output() createTodo = new EventEmitter<TodoInterface>();

  public value = '';

  public create() {
    const newTodo: TodoInterface = {
      value: this.value,
      id: Date.now(),
      done: false,
    };

    this.createTodo.emit(newTodo);
  }
}
