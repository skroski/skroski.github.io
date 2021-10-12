import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto.routing';

import { ProdutoDetalheComponent } from './components/produto-card-detalhe.component';
import { ProdutoCountComponent } from './components/produto-count-component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoService } from './services/produto.service';
import { ProdutosResolve } from './services/produto.resove';


@NgModule({
  declarations: [
    ProdutoAppComponent,
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
  ],
  providers:[
    ProdutoService,
    ProdutosResolve
  ],
  exports: []
})
export class ProdutoModule { }
