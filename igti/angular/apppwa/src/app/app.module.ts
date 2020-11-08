import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { JogodavelhaComponent } from './jogodavelha/jogodavelha.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FilmesComponent } from './filmes/filmes.component';
import { RatingComponent } from './filmes/rating/rating.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './filmes/panel/panel.component';
import { CssclassComponent } from './cssclass/cssclass.component';
import { C1Component } from './cssclass/c1/c1.component';
import { C2Component } from './cssclass/c2/c2.component';
import { RefreshComponent } from './refresh/refresh.component';
import { CounterchangeComponent } from './counterchange/counterchange.component';
import { PipesComponent } from './pipes/pipes.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CepPipe } from './pipes/cep.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { JoinStringsPipe } from './pipes/join-strings.pipe';
import { ServicosComponent } from './servicos/servicos.component';
import { C2bComponent } from './servicos/c2b/c2b.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';

export const TEMA = new InjectionToken<string>('app.theme');
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    JogodavelhaComponent,
    TodoListComponent,
    FilmesComponent,
    RatingComponent,
    PanelComponent,
    CssclassComponent,
    C1Component,
    C2Component,
    RefreshComponent,
    CounterchangeComponent,
    PipesComponent,
    CepPipe,
    CpfPipe,
    JoinStringsPipe,
    ServicosComponent,
    C2bComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt' }, {provide: TEMA, useValue: 'dark'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
