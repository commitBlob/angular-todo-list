// Core
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: 'new-todo-item.component.html'
})
export class NewTodoItemComponent {
  @Output() addTodo: EventEmitter<any> = new EventEmitter<any>();

  todoDetails = {
    label: '',
    description: '',
    category: '',
    done: false
  };

  updateValue(e, attribute) {
    this.todoDetails[attribute] = e;
  }

  buttonDisabled(): boolean {
    return (this.todoDetails.label === '' || this.todoDetails.description === '');
  }

  addTask() {
    this.addTodo.emit(this.todoDetails);
  }
}
