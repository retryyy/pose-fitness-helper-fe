import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSidebarElement',
})
export class HighlightSidebarElementPipe implements PipeTransform {
  transform(value: string | undefined, route: string): boolean {
    return value
      ? value.length === 1
        ? value === route
        : route.startsWith(value)
      : false;
  }
}
