import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

const BASE_API = "http://localhost:3000/api/produtos";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(BASE_API);
  }

  buscarPorId(id: number): Observable<Produto> {
    const uri = `${BASE_API}/${id}`;
    return this.http.get<Produto>(uri);
  }

  inserir(produto: Produto): Observable<Produto> {
    return this.http.post(BASE_API, produto, httpOptions);
  }

  editar(id: number, produto:Produto): Observable<Produto> {
    const uri = `${BASE_API}/${id}`;
    return this.http.put<Produto>(uri,produto,httpOptions);
  }

  deletar(id: number): Observable<Produto> {
    const uri = `${BASE_API}/${id}`;
    return this.http.delete<Produto>(uri);
  }
}
