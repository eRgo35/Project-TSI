import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
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
import { titleService } from './title.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NauczycieleComponent,
    ZdjeciaComponent,
    TabelaComponent,
    ListyComponent,
    FormularzComponent,
    TabelaSprComponent,
    ListySprComponent,
    FormularzSprComponent,
    WlasciwosciCssComponent,
    KlasaIdentyfikatorComponent,
    TabeleCssComponent,
    PseudoelementyComponent,
    PseudoelementyBasnComponent,
    SelektorElementuComponent,
    SelektorAtrybutuComponent,
    SelektorAtrybutu2Component,
    SelektorAtrybutu3Component,
    MultimediaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    titleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
