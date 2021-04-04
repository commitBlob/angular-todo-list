import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'filterCompleted'})
export class FilterPipe implements PipeTransform {
  public transform(todos: any, includeCompleted: boolean): any {
    return (includeCompleted) ? todos : todos.filter((todo) => !todo.done);
  }
}
