import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { Todo } from '../../../Todo';

@Component({
  imports: [],
  selector: 'app-todo-item',
  styleUrl: './todo-item.css',
  templateUrl: './todo-item.html',
})
export class TodoItem {
@Input() todo!: Todo;
@Input() i!: number;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
onClick(todo: Todo) {
  this.todoDelete.emit(todo);
  console.log("I am Clicked");
}
oncheckboxClick(todo: Todo) {
  this.todoCheckbox.emit(todo);
}
}