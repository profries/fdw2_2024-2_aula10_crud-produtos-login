import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  idGen = 6;

  listaProdutos: Produto[] = [
    {id: 1, nome:"Produto 1", preco: 100, marca: "Marca 1", dataValidade: new Date("2024-12-20")},
    {id: 2, nome:"Produto 2", preco: 200, marca: "Marca 1", dataValidade: new Date("2024-12-20")},
    {id: 3, nome:"Produto 3", preco: 300, marca: "Marca 1", dataValidade: new Date("2024-12-20")},
    {id: 4, nome:"Produto 4", preco: 400, marca: "Marca 2", dataValidade: new Date("2024-12-20")},
    {id: 5, nome:"Produto 5", preco: 500, marca: "Marca 2", dataValidade: new Date("2024-12-20")}
  ];  

  constructor() { }

  listar() { 
    return this.listaProdutos;
  }

  private generateId() {
    return this.idGen++;
  }

  inserir(produto: Produto) {
    produto.id = this.generateId();
    this.listaProdutos.push(produto);
  }

  buscarPorId(id: number): Produto {
    const produto = this.listaProdutos.find(
      produto => produto.id == id
    );
    return produto ? Object.assign({},produto) :new Produto();
  }

  editar(id: number, produto: Produto) {
    const indice = this.getIndice(id);
    if(indice >= 0){
      this.listaProdutos[indice] = produto;
    }
  }

  deletar(id?: number) {
    const indice = this.getIndice(id);
    if(indice >=0){
      this.listaProdutos.splice(indice, 1);
    }
  }

  private getIndice(id?:number){
    return this.listaProdutos.findIndex(
      produto => produto.id == id
    );
  }
}
