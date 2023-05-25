import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `
    <app-todo-list (todoEmitted)="received = $event"></app-todo-list>
    <app-todo-details [todo]="received"></app-todo-details>
  `,
})
export class TodosComponent {
  received: any;
}
