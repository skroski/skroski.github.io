import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinStrings',
  pure: false,
})
export class JoinStringsPipe implements PipeTransform {

  transform(array: string[], separador: string): unknown {
    return array.join(separador);
  }
}
