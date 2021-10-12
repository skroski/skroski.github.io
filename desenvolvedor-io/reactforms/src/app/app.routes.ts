import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { NotFoundComponent } from './navegacao/notFound/notFound.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { BarComponent } from './demos/bar-di-zones/bar.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    { path: 'bar', component: BarComponent },
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
        .then(m => m.ProdutoModule)},
    { path: 'filmes', component: FilmesComponent },
    { path: 'admin', 
        loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule),
    canLoad: [AuthGuard], 
    canActivate: [AuthGuard]},

    {path: '**', component: NotFoundComponent },
];

@NgModule({

    imports: [
        RouterModule.forRoot(rootRouterConfig, {enableTracing:false})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}