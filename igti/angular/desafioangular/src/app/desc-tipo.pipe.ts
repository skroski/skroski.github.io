import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descTipo'
})
export class DescTipoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
