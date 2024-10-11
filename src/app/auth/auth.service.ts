import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

const BASE_API = "http://localhost:3000/api/login";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<boolean> {
    return this.http.post<any>(BASE_API, usuario, httpOptions).pipe(
      tap((resp: any) => {
        if(resp && resp?.token){
          sessionStorage.setItem("token", resp.token);
          return true;
        }
        else {
          return false;
        }
      }),
      catchError(error => of(false))      
    );    
  }
}
