import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  imports: [FormsModule],
  selector: 'app-add-todo',
  styleUrl: './add-todo.css',
  templateUrl: './add-todo.html',
})
export class AddTodo {
onSubmit() {
  const todo = {
    sno: 4,
    title: this.title,
    desc: this.desc,
    active: true
  }
  this.todoAdd.emit(todo);
  console.log(todo);
  // throw new Error('Method not implemented.');
}
  title: string = '';
  desc: string = '';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
}
