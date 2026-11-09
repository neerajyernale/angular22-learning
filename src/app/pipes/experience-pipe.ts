import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience',
})
export class ExperiencePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
