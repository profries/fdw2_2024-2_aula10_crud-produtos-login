import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { ListCardProdutosComponent } from './list-card-produtos/list-card-produtos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tabela', component: TabelaProdutosComponent, canActivate: [AuthGuard] },
  { path: 'novo', component: FormProdutosComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: FormProdutosComponent, canActivate: [AuthGuard] },
  { path: 'cards', component: ListCardProdutosComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo:'/cards', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
