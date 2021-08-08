import { NotFoundComponent } from './navegacao/notFound/notFound.component';

import { Router, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgModule } from '@angular/core';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
        .then(m => m.ProdutoModule)},

    {path: '**', component: NotFoundComponent },
];

@NgModule({

    imports: [
        RouterModule.forRoot(rootRouterConfig, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}