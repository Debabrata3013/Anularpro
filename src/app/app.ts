import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todos } from './MyComponents/todos/todos';
import { TodoItem } from './MyComponents/todos/todo-item/todo-item';
import { AddTodo } from './MyComponents/add-todo/add-todo';
@Component({
  imports: [RouterOutlet, Todos ,TodoItem , AddTodo], 
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cwh-todo-list');
  constructor() {
    // setTimeout(() => {
    //   this.title.set("Change Title");
    // }, 3000);   
}
}