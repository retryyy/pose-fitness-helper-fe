import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum',
})
export class EnumPipe implements PipeTransform {
  transform(value: string | undefined, enumType: any): string {
    return enumType[value!];
  }
}
