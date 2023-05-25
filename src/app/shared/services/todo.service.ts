import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  // public todos: Todo[] = [
  //   new Todo("Elaborer une solution"),
  //   new Todo("Mettre en oeuvre cette solution"),
  //   new Todo("Tester que ça marche"),
  // ]; 

  constructor(private _http: HttpClient) { }

  read() {
    return this._http.get<Todo[]>('http://localhost:3000/todos');
  }

  create(todo: Todo) {
    return this._http.post<Todo>('http://localhost:3000/todos', todo);
  }
}
