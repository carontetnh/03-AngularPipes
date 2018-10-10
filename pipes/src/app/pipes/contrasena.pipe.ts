import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activado: boolean = true): any {
     let result = value;
    if ( activado ) {
      let contrasenaOculta = '';
      for ( let i = 0; i < value.length; i++ ) {
        contrasenaOculta += '*';
      }
      result = contrasenaOculta;
    }


     return result;
  }

}
