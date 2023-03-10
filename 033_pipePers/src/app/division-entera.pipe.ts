import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divisionEntera',
})
export class DivisionEnteraPipe implements PipeTransform {
  transform(value: number, divisor: string): string {
    let div = parseFloat(divisor);
    let conciente = Math.floor(value / div);
    let resto = value % div;

    return 'Cociente:' + conciente + ' # Resto: ' + resto;
  }
}
