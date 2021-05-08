import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HelloComponent } from './main/hello/hello.component';
import { ThemeComponent } from './shared/theme/theme.component';
import { TitleService } from './shared/services/title.service';
import { HeaderComponent } from './shared/header/header.component';
import { WrapperComponent } from './main/wrapper/wrapper.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MenuComponent, MenuSmComponent } from './shared/menu/menu.component';
import { NauczycieleComponent } from './basics/html/nauczyciele/nauczyciele.component';
import { ZdjeciaComponent } from './basics/html/zdjecia/zdjecia.component';
import { TabelaComponent } from './basics/html/tabela/tabela.component';
import { ListyComponent } from './basics/html/listy/listy.component';
import { FormularzComponent } from './basics/html/formularz/formularz.component';
import { TabelaSprComponent } from './basics/html/tabela-spr/tabela-spr.component';
import { ListySprComponent } from './basics/html/listy-spr/listy-spr.component';
import { FormularzSprComponent } from './basics/html/formularz-spr/formularz-spr.component';
import { WlasciwosciCssComponent } from './basics/css/wlasciwosci-css/wlasciwosci-css.component';
import { TabeleCssComponent } from './basics/css/tabele-css/tabele-css.component';
import { SelektorElementuComponent } from './basics/css/selektor-elementu/selektor-elementu.component';
import { SelektorAtrybutu1Component } from './basics/css/selektor-atrybutu1/selektor-atrybutu1.component';
import { SelektorAtrybutu2Component } from './basics/css/selektor-atrybutu2/selektor-atrybutu2.component';
import { SelektorAtrybutu3Component } from './basics/css/selektor-atrybutu3/selektor-atrybutu3.component';
import { PseudoelementyComponent } from './basics/css/pseudoelementy/pseudoelementy.component';
import { PseudoelementyBasnComponent } from './basics/css/pseudoelementy-basn/pseudoelementy-basn.component';
import { KlasaIdentyfikatorComponent } from './basics/css/klasa-identyfikator/klasa-identyfikator.component';
import { WindowsXpComponent } from './basics/animations/windows-xp/windows-xp.component';
import { ZuluComponent } from './basics/animations/zulu/zulu.component';
import { LoadingComponent } from './basics/animations/loading/loading.component';
import { MultimediaComponent } from './basics/html/multimedia/multimedia.component';
import { Uklad1Component } from './html5/uklad1/uklad1.component';
import { Uklad2Component } from './html5/uklad2/uklad2.component';
import { ZwierzetaComponent } from './html5/zwierzeta/zwierzeta.component';
import { GaleriaComponent } from './html5/galeria/galeria.component';
import { Pozycjonowanie1Component } from './html5/pozycjonowanie1/pozycjonowanie1.component';
import { Pozycjonowanie2Component } from './html5/pozycjonowanie2/pozycjonowanie2.component';
import { Pozycjonowanie3Component } from './html5/pozycjonowanie3/pozycjonowanie3.component';
import { ThemeService } from './shared/theme/theme.service';
import { HttpClientModule } from '@angular/common/http';
import { StyleManagerService } from './shared/theme/style-manager.service';
import { SidenavService } from './shared/services/sidenav.service';
import { NauczycieleSourceComponent } from './source-code/basics/html/nauczyciele-source/nauczyciele-source.component';
import { ZdjeciaSourceComponent } from './source-code/basics/html/zdjecia-source/zdjecia-source.component';
import { FormularzSourceComponent } from './source-code/basics/html/formularz-source/formularz-source.component';
import { FormularzSprSourceComponent } from './source-code/basics/html/formularz-spr-source/formularz-spr-source.component';
import { ListySourceComponent } from './source-code/basics/html/listy-source/listy-source.component';
import { ListySprSourceComponent } from './source-code/basics/html/listy-spr-source/listy-spr-source.component';
import { TabelaSourceComponent } from './source-code/basics/html/tabela-source/tabela-source.component';
import { TabelaSprSourceComponent } from './source-code/basics/html/tabela-spr-source/tabela-spr-source.component';
import { WlasciwosciCssSourceComponent } from './source-code/basics/css/wlasciwosci-css-source/wlasciwosci-css-source.component';
import { KlasaIdentyfikatorSourceComponent } from './source-code/basics/css/klasa-identyfikator-source/klasa-identyfikator-source.component';
import { TabeleCssSourceComponent } from './source-code/basics/css/tabele-css-source/tabele-css-source.component';
import { PseudoelementySourceComponent } from './source-code/basics/css/pseudoelementy-source/pseudoelementy-source.component';
import { PseudoelementyBasnSourceComponent } from './source-code/basics/css/pseudoelementy-basn-source/pseudoelementy-basn-source.component';
import { SelektorElementuSourceComponent } from './source-code/basics/css/selektor-elementu-source/selektor-elementu-source.component';
import { SelektorAtrybutu2SourceComponent } from './source-code/basics/css/selektor-atrybutu2-source/selektor-atrybutu2-source.component';
import { SelektorAtrybutu3SourceComponent } from './source-code/basics/css/selektor-atrybutu3-source/selektor-atrybutu3-source.component';
import { SelektorAtrybutu1SourceComponent } from './source-code/basics/css/selektor-atrybutu1-source/selektor-atrybutu1-source.component';
import { WindowsXpSourceComponent } from './source-code/basics/animations/windows-xp-source/windows-xp-source.component';
import { ZuluSourceComponent } from './source-code/basics/animations/zulu-source/zulu-source.component';
import { LoadingSourceComponent } from './source-code/basics/animations/loading-source/loading-source.component';
import { MultimediaSourceComponent } from './source-code/basics/html/multimedia-source/multimedia-source.component';
import { MenuComponent5 } from './html5/menu/menu.component';
import { FourOFourComponent } from './main/four-o-four/four-o-four.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HelloComponent,
    ThemeComponent,
    HeaderComponent,
    WrapperComponent,
    ToolbarComponent,
    MenuComponent,
    NauczycieleComponent,
    ZdjeciaComponent,
    TabelaComponent,
    ListyComponent,
    FormularzComponent,
    TabelaSprComponent,
    ListySprComponent,
    FormularzSprComponent,
    WlasciwosciCssComponent,
    TabeleCssComponent,
    SelektorElementuComponent,
    SelektorAtrybutu1Component,
    SelektorAtrybutu2Component,
    SelektorAtrybutu3Component,
    PseudoelementyComponent,
    PseudoelementyBasnComponent,
    KlasaIdentyfikatorComponent,
    WindowsXpComponent,
    ZuluComponent,
    LoadingComponent,
    MultimediaComponent,
    Uklad1Component,
    Uklad2Component,
    ZwierzetaComponent,
    GaleriaComponent,
    Pozycjonowanie1Component,
    Pozycjonowanie2Component,
    Pozycjonowanie3Component,
    MenuSmComponent,
    NauczycieleSourceComponent,
    ZdjeciaSourceComponent,
    FormularzSourceComponent,
    FormularzSprSourceComponent,
    ListySourceComponent,
    ListySprSourceComponent,
    TabelaSourceComponent,
    TabelaSprSourceComponent,
    WlasciwosciCssSourceComponent,
    KlasaIdentyfikatorSourceComponent,
    TabeleCssSourceComponent,
    PseudoelementySourceComponent,
    PseudoelementyBasnSourceComponent,
    SelektorElementuSourceComponent,
    SelektorAtrybutu2SourceComponent,
    SelektorAtrybutu3SourceComponent,
    SelektorAtrybutu1SourceComponent,
    WindowsXpSourceComponent,
    ZuluSourceComponent,
    LoadingSourceComponent,
    MultimediaSourceComponent,
    MenuComponent5,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    TitleService,
    ThemeService,
    StyleManagerService,
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
