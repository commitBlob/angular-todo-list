// Core
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// App specific
import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
];

export const TodoListRoutes: ModuleWithProviders = RouterModule.forChild(routes);
