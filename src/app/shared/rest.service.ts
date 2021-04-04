import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestService {
  // apiUrl = environment['API_REST_URL']; usually I would keep services API's defined in environment files
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getTodoList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks`);
  }

  getTodoItem(itemId: number): Observable<any> {
    return this.http.get((`${this.apiUrl}/tasks/${itemId}`));
  }

  createTodoItem(todoItem: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tasks`, todoItem);
  }

  updateTodoItem(itemId: number, todoItem: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/tasks/${itemId}`, todoItem);
  }

  deleteTodoItem(itemId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${itemId}`);
  }
}
