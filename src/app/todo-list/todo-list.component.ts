import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../shared/models/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Output('todoEmitted') emitter = new EventEmitter();
  todos: Todo[] = [];
  inputTodo = "";

  constructor(private _todoService: TodoService) {
    this._init();
  }

  private _init() {
    this._todoService
      .read()
      .subscribe(todosReceived => {
        this.todos = todosReceived;
      });
  }

  insertTodo() {
    const todo = new Todo(this.inputTodo);
    this._todoService.create(todo).subscribe(() => this._init);
  }

  onSelectTodo(e: any, todo: any){
    e.stopPropagation();
    todo.done = !todo.done;
  }
  
  sendTodoToParent(e: any, todo: Todo) {
    e.stopPropagation();
    this.emitter.emit(todo);
  }
}
