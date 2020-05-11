import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NauczycieleComponent } from './static/html/nauczyciele/nauczyciele.component';
import { ZdjeciaComponent } from './static/html/zdjecia/zdjecia.component';
import { TabelaComponent } from './static/html/tabela/tabela.component';
import { ListyComponent } from './static/html/listy/listy.component';
import { FormularzComponent } from './static/html/formularz/formularz.component';
import { TabelaSprComponent } from './static/html/tabela-spr/tabela-spr.component';
import { ListySprComponent } from './static/html/listy-spr/listy-spr.component';
import { FormularzSprComponent } from './static/html/formularz-spr/formularz-spr.component';
import { WlasciwosciCssComponent } from './static/css/wlasciwosci-css/wlasciwosci-css.component';
import { KlasaIdentyfikatorComponent } from './static/css/klasa-identyfikator/klasa-identyfikator.component';
import { TabeleCssComponent } from './static/css/tabele-css/tabele-css.component';
import { PseudoelementyComponent } from './static/css/pseudoelementy/pseudoelementy.component';
import { PseudoelementyBasnComponent } from './static/css/pseudoelementy-basn/pseudoelementy-basn.component';
import { SelektorElementuComponent } from './static/css/selektor-elementu/selektor-elementu.component';
import { SelektorAtrybutuComponent } from './static/css/selektor-atrybutu/selektor-atrybutu.component';
import { SelektorAtrybutu2Component } from './static/css/selektor-atrybutu2/selektor-atrybutu2.component';
import { SelektorAtrybutu3Component } from './static/css/selektor-atrybutu3/selektor-atrybutu3.component';
import { MultimediaComponent } from './static/multimedia/multimedia.component';
import { ModuleWithProviders } from '@angular/core';
import { WindowsXpComponent } from './static/animations/windows-xp/windows-xp.component';
import { ZuluComponent } from './static/animations/zulu/zulu.component';
import { LoadingComponent } from './static/animations/loading/loading.component';

const routes: Routes = [
  // MAIN URLS
  { path: '', component: MainComponent },
  { path: 'html-basics/multimedia', component: MultimediaComponent },
  // HTML URLS
  { path: 'html-basics/nauczyciele', component: NauczycieleComponent },
  { path: 'html-basics/zdjecia', component: ZdjeciaComponent },
  { path: 'html-basics/tabela', component: TabelaComponent },
  { path: 'html-basics/listy', component: ListyComponent },
  { path: 'html-basics/formularz', component: FormularzComponent },
  { path: 'html-basics/tabela-spr', component: TabelaSprComponent },
  { path: 'html-basics/listy-spr', component: ListySprComponent },
  { path: 'html-basics/formularz-spr', component: FormularzSprComponent },
  // CSS URLS
  { path: 'css-basics/wlasciwosci-css', component: WlasciwosciCssComponent },
  { path: 'css-basics/klasa-identyfikator', component: KlasaIdentyfikatorComponent },
  { path: 'css-basics/tabele-css', component: TabeleCssComponent },
  { path: 'css-basics/pseudoelementy', component: PseudoelementyComponent },
  { path: 'css-basics/pseudoelementy-basn', component: PseudoelementyBasnComponent },
  { path: 'css-basics/selektor-elementu', component: SelektorElementuComponent },
  { path: 'css-basics/selektor-atrybutu', component: SelektorAtrybutuComponent },
  { path: 'css-basics/selektor-atrybutu-2', component: SelektorAtrybutu2Component },
  { path: 'css-basics/selektor-atrybutu-3', component: SelektorAtrybutu3Component },
  // ANIMATIONS URLS
  { path: 'animations/windows-xd', component: WindowsXpComponent },
  { path: 'animations/zulu', component: ZuluComponent },
  { path: 'animations/loading', component: LoadingComponent },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);