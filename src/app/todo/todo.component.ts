import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';
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
  searchTerm: string;
  showIndex: number;
  constructor() {}

  setShowIndex(index: number) {
    this.showIndex = index;
  }

  resetShowIndex() {
    this.showIndex = undefined;
  }
  addTask(form: NgForm) {
    let newTodo: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.todos.push(newTodo);
  }
  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    this.todos[index].completed = true;
  }

  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.toLowerCase().trim();
  }
  filter() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((chore) => {
        let currentTodo = chore.task.toLowerCase().trim();
        return currentTodo.includes(this.searchTerm);
      });
    }
  }

  ngOnInit(): void {}
}
