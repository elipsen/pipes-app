import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  /* transform(value: string, ...args: any[]): string {

    // Desestructuramos el array de argumentos, para obtener el valor
    const [upper] = args;

    if (!upper) {
      return value.toLowerCase();
    } else {
      return value.toUpperCase();
    }
  } */

  transform(value: string, upper:boolean = false): string {
    // Indicamos upper en la función con un valor ya por defecto, asi manejamos mejor la transformación
    if (!upper) {
      return value.toLowerCase();
    } else {
      return value.toUpperCase();
    }
  }

}
