import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // 👈 Safe browser check tool
import { Todo } from '../../Todo';
import { TodoItem } from './todo-item/todo-item';
import { AddTodo } from '../add-todo/add-todo';
import { CommonModule } from '@angular/common';

@Component({
  imports: [TodoItem, AddTodo, CommonModule],
  selector: 'app-todos',
  styleUrl: './todos.css',
  templateUrl: './todos.html',
})
export class Todos implements OnInit {
  localItem: string | null = null;
  todos: Todo[] = []; // 👈 Clean initialization
i: any;

  // We safely inject the platform ID into the constructor
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // 👈 This runs safely ONLY inside the browser window environment
    if (isPlatformBrowser(this.platformId)) {
      this.localItem = localStorage.getItem("todos");
      if (this.localItem == null) {
        this.todos = [];      
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    //if (index > -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));

    }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo); 
    localStorage.setItem("todos", JSON.stringify(this.todos)); 
    
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
