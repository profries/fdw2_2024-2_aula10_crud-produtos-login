import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {

  transform(valor: number | undefined): string {
    //se for undefined
    if(!valor) return "";
    //300 ou 300.0424564 -> 300.00
    const valorDecimal = valor.toFixed(2);
    //300.00 -> 300,00
    const valorDecimalBr = valorDecimal.replace('.', ',');
    //300,00 -> R$ 300,00
    const valorMoeda = 'R$ '+ valorDecimalBr;
    return valorMoeda;
  }

}
