// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { RestService } from '../shared/rest.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  todoList = [];
  showNewItemForm = false;
  showCompleted = false;

  constructor(private restService: RestService) {
  }

  public ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(): void {
    this.restService.getTodoList().subscribe((res) => {
      if (res) {
        this.todoList = res;
      }
    });
  }

  updateTodo(todo): void {
    todo.done ? this.completeTask(todo) : this.updateTask(todo);
  }

  deleteTodo(todoId): void {
    this.restService.deleteTodoItem(todoId).subscribe((res) => {
      if (res) {
        alert('Task removed!');
        this.getTodoList();
      }
    });
  }

  updateTask(task): void {
    this.restService.updateTodoItem(task.id, task).subscribe((res) => {
      if (res) {
        // Ideally I would show success message in a snackbar
        alert('Task updated!');
        this.getTodoList();
      }
    });
  }

  completeTask(task): void {
    this.restService.updateTodoItem(task.id, task).subscribe((res) => {
      if (res) {
        // Ideally I would show success message in a snackbar
        alert('Task completed!');
        this.getTodoList();
      }
    });
  }

  showForm(): void {
    this.showNewItemForm = true;
  }

  addNewToDo(newTodo): void {
    this.restService.createTodoItem(newTodo).subscribe((res) => {
      if (res) {
        this.showNewItemForm = false;
        this.todoList.push(res);
        alert('Task added to the list!');
      }
    });
  }

  checkboxUpdate(event): void {
    this.showCompleted = event.target.checked;
  }
}
