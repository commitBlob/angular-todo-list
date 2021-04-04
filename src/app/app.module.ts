// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

// App specific
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTodoItemModule } from './new-todo-item/new-todo-item.module';
import { RestService } from './shared/rest.service';
import { TodoItemModule } from './todo-item/todo-item.module';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NewTodoItemModule,
    TodoItemModule,
    TodoListModule
  ],
  providers: [
    HttpClient,
    RestService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
