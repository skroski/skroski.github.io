import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil' 
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';

import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }