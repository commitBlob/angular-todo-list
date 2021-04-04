// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// App specific
import { TodoItemComponent } from './todo-item.component';

@NgModule({
  declarations: [
    TodoItemComponent
  ],
  exports: [
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TodoItemModule {
}
