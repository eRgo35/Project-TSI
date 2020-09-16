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

import { NauczycieleSourceComponent } from './source-code/basics/html/nauczyciele-source/nauczyciele-source.component';
import { ZdjeciaSourceComponent } from './source-code/basics/html/zdjecia-source/zdjecia-source.component';
import { TabelaSourceComponent } from './source-code/basics/html/tabela-source/tabela-source.component';
import { ListySourceComponent } from './source-code/basics/html/listy-source/listy-source.component';
import { FormularzSourceComponent } from './source-code/basics/html/formularz-source/formularz-source.component';
import { TabelaSprSourceComponent } from './source-code/basics/html/tabela-spr-source/tabela-spr-source.component';
import { ListySprSourceComponent } from './source-code/basics/html/listy-spr-source/listy-spr-source.component';
import { FormularzSprSourceComponent } from './source-code/basics/html/formularz-spr-source/formularz-spr-source.component';
import { WlasciwosciCssSourceComponent } from './source-code/basics/css/wlasciwosci-css-source/wlasciwosci-css-source.component';
import { KlasaIdentyfikatorSourceComponentComponent } from './source-code/basics/css/klasa-identyfikator-source-component/klasa-identyfikator-source-component.component';
import { TabeleCssSourceComponentComponent } from './source-code/basics/css/tabele-css-source-component/tabele-css-source-component.component';
import { PseudoelementySourceComponentComponent } from './source-code/basics/css/pseudoelementy-source-component/pseudoelementy-source-component.component';
import { PseudoelementyBasnSourceComponentComponent } from './source-code/basics/css/pseudoelementy-basn-source-component/pseudoelementy-basn-source-component.component';
import { SelektorElementuSourceComponentComponent } from './source-code/basics/css/selektor-elementu-source-component/selektor-elementu-source-component.component';
import { SelektorAtrybutu2SourceComponentComponent } from './source-code/basics/css/selektor-atrybutu2-source-component/selektor-atrybutu2-source-component.component';
import { SelektorAtrybutu3SourceComponentComponent } from './source-code/basics/css/selektor-atrybutu3-source-component/selektor-atrybutu3-source-component.component';
import { SelektorAtrybutu1SourceComponentComponent } from './source-code/basics/css/selektor-atrybutu1-source-component/selektor-atrybutu1-source-component.component';
import { WindowsXpSourceComponentComponent } from './source-code/basics/animations/windows-xp-source-component/windows-xp-source-component.component';
import { ZuluSourceComponentComponent } from './source-code/basics/animations/zulu-source-component/zulu-source-component.component';
import { LoadingSourceComponentComponent } from './source-code/basics/animations/loading-source-component/loading-source-component.component';
import { MultimediaSourceComponentComponent } from './source-code/basics/html/multimedia-source-component/multimedia-source-component.component';
// import { Uklad1SourceComponent } from './source-code/html5/uklad1/uklad1.component';
// import { Uklad2SourceComponent } from './source-code/html5/uklad2/uklad2.component';
// import { ZwierzetaSourceComponent } from './source-code/html5/zwierzeta/zwierzeta.component';
// import { GaleriaSourceComponent } from './source-code/html5/galeria/galeria.component';
// import { MenuSourceComponent } from './source-code/html5/menu/menu.component';
// import { Pozycjonowanie1SourceComponent } from './source-code/html5/pozycjonowanie1/pozycjonowanie1.component';
// import { Pozycjonowanie2SourceComponent } from './source-code/html5/pozycjonowanie2/pozycjonowanie2.component';
// import { Pozycjonowanie3SourceComponent } from './source-code/html5/pozycjonowanie3/pozycjonowanie3.component';

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

  // Source-code
  // HTML Basics URLs
  { path: 'html-basics/nauczyciele/code', component: NauczycieleSourceComponent },
  { path: 'html-basics/zdjecia/code', component: ZdjeciaSourceComponent },
  { path: 'html-basics/tabela/code', component: TabelaSourceComponent },
  { path: 'html-basics/listy/code', component: ListySourceComponent },
  { path: 'html-basics/formularz/code', component: FormularzSourceComponent },
  { path: 'html-basics/tabela-spr/code', component: TabelaSprSourceComponent },
  { path: 'html-basics/listy-spr/code', component: ListySprSourceComponent },
  { path: 'html-basics/formularz-spr/code', component: FormularzSprSourceComponent },
  // CSS URLs
  { path: 'css-basics/wlasciwosci-css/code', component: WlasciwosciCssSourceComponent },
  { path: 'css-basics/klasa-identyfikator/code', component: KlasaIdentyfikatorSourceComponentComponent },
  { path: 'css-basics/tabele-css/code', component: TabeleCssSourceComponentComponent },
  { path: 'css-basics/pseudoelementy/code', component: PseudoelementySourceComponentComponent },
  { path: 'css-basics/pseudoelementy-basn/code', component: PseudoelementyBasnSourceComponentComponent },
  { path: 'css-basics/selektor-elementu/code', component: SelektorElementuSourceComponentComponent },
  { path: 'css-basics/selektor-atrybutu/code', component: SelektorAtrybutu1SourceComponentComponent },
  { path: 'css-basics/selektor-atrybutu-2/code', component: SelektorAtrybutu2SourceComponentComponent },
  { path: 'css-basics/selektor-atrybutu-3/code', component: SelektorAtrybutu3SourceComponentComponent },
  // ANISourceMATIONS URLs
  { path: 'animations/windows-xd/code', component: WindowsXpSourceComponentComponent },
  { path: 'animations/zulu/code', component: ZuluSourceComponentComponent },
  { path: 'animations/loading/code', component: LoadingSourceComponentComponent },
  // MULSourceTIMEDIA URLs
  { path: 'html-basics/multimedia/code', component: MultimediaSourceComponentComponent },
  // // HTML5 URLs
  // { path: 'html5/uklad1/code', component: Uklad1SourceComponent },
  // { path: 'html5/uklad2/code', component: Uklad2SourceComponent },
  // { path: 'html5/zwierzeta/code', component: ZwierzetaSourceComponent },
  // { path: 'html5/galeria/code', component: GaleriaSourceComponent },
  // { path: 'html5/menu/code', component: MenuSourceComponent },
  // { path: 'html5/pozycjonowanie1/code', component: Pozycjonowanie1SourceComponent },
  // { path: 'html5/pozycjonowanie2/code', component: Pozycjonowanie2SourceComponent },
  // { path: 'html5/pozycjonowanie3/code', component: Pozycjonowanie3SourceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
