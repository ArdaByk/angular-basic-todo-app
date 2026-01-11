import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipePipe implements PipeTransform {

  transform(todos: { text: string, isCompleted: boolean }[], searchValue: string): { text: string, isCompleted: boolean }[] {
    if (searchValue == null || searchValue == "") return todos;

    return todos.filter(t => t.text.includes(searchValue))

  }

}
