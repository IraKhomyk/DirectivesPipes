import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: string, defaultValue: string = 'N/A'): string {
    return value ? value : defaultValue;
  }

}
