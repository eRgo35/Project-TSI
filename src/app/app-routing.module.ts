import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './main/hello/hello.component';
import { NauczycieleComponent } from './basics/html/nauczyciele/nauczyciele.component';
import { ZdjeciaComponent } from './basics/html/zdjecia/zdjecia.component';
import { TabelaComponent } from './basics/html/tabela/tabela.component';
import { ListyComponent } from './basics/html/listy/listy.component';
import { FormularzComponent } from './basics/html/formularz/formularz.component';
import { TabelaSprComponent } from './basics/html/tabela-spr/tabela-spr.component';
import { ListySprComponent } from './basics/html/listy-spr/listy-spr.component';
import { FormularzSprComponent } from './basics/html/formularz-spr/formularz-spr.component';
import { WlasciwosciCssComponent } from './basics/css/wlasciwosci-css/wlasciwosci-css.component';
import { KlasaIdentyfikatorComponent } from './basics/css/klasa-identyfikator/klasa-identyfikator.component';
import { TabeleCssComponent } from './basics/css/tabele-css/tabele-css.component';
import { PseudoelementyComponent } from './basics/css/pseudoelementy/pseudoelementy.component';
import { PseudoelementyBasnComponent } from './basics/css/pseudoelementy-basn/pseudoelementy-basn.component';
import { SelektorElementuComponent } from './basics/css/selektor-elementu/selektor-elementu.component';
import { SelektorAtrybutu2Component } from './basics/css/selektor-atrybutu2/selektor-atrybutu2.component';
import { SelektorAtrybutu3Component } from './basics/css/selektor-atrybutu3/selektor-atrybutu3.component';
import { SelektorAtrybutu1Component } from './basics/css/selektor-atrybutu1/selektor-atrybutu1.component';
import { WindowsXpComponent } from './basics/animations/windows-xp/windows-xp.component';
import { ZuluComponent } from './basics/animations/zulu/zulu.component';
import { LoadingComponent } from './basics/animations/loading/loading.component';
import { MultimediaComponent } from './basics/html/multimedia/multimedia.component';
import { Uklad1Component } from './html5/uklad1/uklad1.component';
import { Uklad2Component } from './html5/uklad2/uklad2.component';
import { ZwierzetaComponent } from './html5/zwierzeta/zwierzeta.component';
import { GaleriaComponent } from './html5/galeria/galeria.component';
import { MenuComponent } from './html5/menu/menu.component';
import { Pozycjonowanie1Component } from './html5/pozycjonowanie1/pozycjonowanie1.component';
import { Pozycjonowanie2Component } from './html5/pozycjonowanie2/pozycjonowanie2.component';
import { Pozycjonowanie3Component } from './html5/pozycjonowanie3/pozycjonowanie3.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  // HTML Basics URLs
  { path: 'html-basics/nauczyciele', component: NauczycieleComponent },
  { path: 'html-basics/zdjecia', component: ZdjeciaComponent },
  { path: 'html-basics/tabela', component: TabelaComponent },
  { path: 'html-basics/listy', component: ListyComponent },
  { path: 'html-basics/formularz', component: FormularzComponent },
  { path: 'html-basics/tabela-spr', component: TabelaSprComponent },
  { path: 'html-basics/listy-spr', component: ListySprComponent },
  { path: 'html-basics/formularz-spr', component: FormularzSprComponent },
  // CSS URLs
  { path: 'css-basics/wlasciwosci-css', component: WlasciwosciCssComponent },
  { path: 'css-basics/klasa-identyfikator', component: KlasaIdentyfikatorComponent },
  { path: 'css-basics/tabele-css', component: TabeleCssComponent },
  { path: 'css-basics/pseudoelementy', component: PseudoelementyComponent },
  { path: 'css-basics/pseudoelementy-basn', component: PseudoelementyBasnComponent },
  { path: 'css-basics/selektor-elementu', component: SelektorElementuComponent },
  { path: 'css-basics/selektor-atrybutu', component: SelektorAtrybutu1Component },
  { path: 'css-basics/selektor-atrybutu-2', component: SelektorAtrybutu2Component },
  { path: 'css-basics/selektor-atrybutu-3', component: SelektorAtrybutu3Component },
  // ANIMATIONS URLs
  { path: 'animations/windows-xd', component: WindowsXpComponent },
  { path: 'animations/zulu', component: ZuluComponent },
  { path: 'animations/loading', component: LoadingComponent },
  // MULTIMEDIA URLs
  { path: 'html-basics/multimedia', component: MultimediaComponent },
  // HTML5 URLs
  { path: 'html5/uklad1', component: Uklad1Component },
  { path: 'html5/uklad2', component: Uklad2Component },
  { path: 'html5/zwierzeta', component: ZwierzetaComponent },
  { path: 'html5/galeria', component: GaleriaComponent },
  { path: 'html5/menu', component: MenuComponent },
  { path: 'html5/pozycjonowanie1', component: Pozycjonowanie1Component },
  { path: 'html5/pozycjonowanie2', component: Pozycjonowanie2Component },
  { path: 'html5/pozycjonowanie3', component: Pozycjonowanie3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
