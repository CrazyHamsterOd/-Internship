import {Injectable} from '@angular/core';
import {TodoInterface} from '../../config/interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public get todos(): TodoInterface[] {
    const todos = localStorage.getItem('todos');

    return !!todos ? JSON.parse(todos) : [];
  }

  public addTodo(todo: TodoInterface): void {
    const updatedTodos = [...this.todos, todo];

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  public deleteTodo(todoId: number) {
    const updatedTodos = this.todos.filter(({id}: TodoInterface) => id !== todoId);

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  public updateTodo(updatedTodo: TodoInterface): void {
    const updatedTodos = this.todos
      .map((todo: TodoInterface) => todo.id === updatedTodo.id ? updatedTodo : todo);

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }
}
