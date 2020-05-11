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
    MenuSmComponent
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
