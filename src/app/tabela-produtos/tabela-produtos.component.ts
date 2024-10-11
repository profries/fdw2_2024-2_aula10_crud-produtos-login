import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.css'
})
export class TabelaProdutosComponent {
  listaProdutos: Produto[] = [];  
  nomePesquisado = "";

  constructor(private produtoApiService: ProdutoApiService) {
    this.listar();
  }

  listar() {
    this.produtoApiService.listar().subscribe(
      (produtos) => {
        this.listaProdutos = produtos;
      }
    );
  }

  deletar(id?:number) {
    this.produtoApiService.deletar(id!).subscribe(
      (produto) => {
        alert(`Produto deletado com sucesso!`);   
        this.listar();     
      }
    )
  }
}
