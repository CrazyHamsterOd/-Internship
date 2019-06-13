import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoInterface} from '../../../config/interfaces/todo.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() todo: TodoInterface;
  @Output() updateTodo = new EventEmitter<TodoInterface>();
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() completeTodo = new EventEmitter<TodoInterface>();

  public editMode = false;

  public changeMode(): void {
    this.editMode = !this.editMode;
  }

  public complete(): void {
    this.completeTodo.emit({
      ...this.todo,
      done: !this.todo.done
    });
  }
}
