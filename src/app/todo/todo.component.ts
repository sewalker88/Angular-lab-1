import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'eat breakfast',
      completed: true,
    },
    {
      task: 'bake cookies',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
