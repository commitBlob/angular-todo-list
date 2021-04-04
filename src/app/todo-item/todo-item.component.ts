// Core
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  templateUrl: 'todo-item.component.html'
})
export class TodoItemComponent {
  @Input() todoDetails;
  @Output() todoUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() todoDelete: EventEmitter<number> = new EventEmitter<number>();

  changed = false;

  constructor(private datePipe: DatePipe) {
  }

  completeTask(): void {
    const todo = this.todoDetails;
    todo.done = this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
    this.todoUpdate.emit(todo);
  }

  updateTask(): void {
    this.todoUpdate.emit(this.todoDetails);
  }

  deleteTask(): void {
    this.todoDelete.emit(this.todoDetails.id);
  }

  updateValue(e, attribute): void {
    this.changed = true;
    this.todoDetails[attribute] = e;
  }
}
