// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// App specific
import { NewTodoItemComponent } from './new-todo-item.component';

@NgModule({
  declarations: [
    NewTodoItemComponent
  ],
  exports: [
    NewTodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class NewTodoItemModule {
}
