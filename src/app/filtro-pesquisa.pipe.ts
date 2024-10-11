import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './produto';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], nomePesquisado: string): Produto[] {
    if(nomePesquisado.length < 3) { 
      return listaProdutos;
    }

    return listaProdutos.filter( (produto: Produto) => {
      return produto.nome?.toLowerCase().includes(nomePesquisado.toLowerCase());
    })      
  }

}
