import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';


@Component({
  selector: 'app-list-card-produtos',
  templateUrl: './list-card-produtos.component.html',
  styleUrl: './list-card-produtos.component.css'
})
export class ListCardProdutosComponent {
  listaProdutos: Produto[] = [];  

  constructor(private produtoApiService: ProdutoApiService) {
    this.produtoApiService.listar().subscribe(
      (produtos) => {
        this.listaProdutos = produtos;
      }
    )
  }
}
