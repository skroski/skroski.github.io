import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil' 
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';

import { AppRoutingModule } from './app.routes';

import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import localePt from '@angular/common/locales/pt';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca938c99a0e9ff91029dc'
    }),
    
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    //BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
