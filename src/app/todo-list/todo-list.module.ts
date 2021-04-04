// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App specific
import { TodoListComponent } from './todo-list.component';
import { TodoListRoutes } from './todo-list.routes';
import { RouterModule } from '@angular/router';
import { TodoItemModule } from '../todo-item/todo-item.module';
import { NewTodoItemModule } from '../new-todo-item/new-todo-item.module';
import { FilterPipe } from '../shared/filter.pipe';

@NgModule({
  declarations: [
    TodoListComponent,
    FilterPipe
  ],
  exports: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TodoListRoutes,
    TodoItemModule,
    NewTodoItemModule
  ]
})
export class TodoListModule { }
