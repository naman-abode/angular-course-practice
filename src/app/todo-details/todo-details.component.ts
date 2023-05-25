import { Component, Input } from '@angular/core';
import { Todo } from '../shared/models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Input() todo!: Todo;
}
