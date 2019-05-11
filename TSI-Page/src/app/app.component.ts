import { Component, OnInit } from '@angular/core';
import { titleService } from './title.service';

interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '';

  constructor(private titleService: titleService) {}

  ngOnInit() {
    this.titleService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }

  HtmlBasics: ROUTE[] = [
    {
      icon: 'school',
      route: 'html-basics/nauczyciele',
      title: 'Nauczyciele',
    }, 
    {
      icon: 'photo_library',
      route: 'html-basics/zdjecia',
      title: 'Zdjęcia',
    },
    {
      icon: 'table_chart',
      route: 'html-basics/tabela',
      title: 'Tabela',
    },
    {
      icon: 'view_list',
      route: 'html-basics/listy',
      title: 'Listy',
    },
    {
      icon: 'assignment',
      route: 'html-basics/formularz',
      title: 'Formularz',
    },
    {
      icon: 'table_chart',
      route: 'html-basics/tabela-spr',
      title: 'Tabela Zaliczenie',
    },
    {
      icon: 'view_list',
      route: 'html-basics/listy-spr',
      title: 'Listy Zaliczenie',
    },
    {
      icon: 'assignment',
      route: 'html-basics/formularz-spr',
      title: 'Formularz Zaliczenie',
    }
  ];
  CssBasics: ROUTE[] = [
    {
      icon: 'build',
      route: 'css-basics/wlasciwosci-css',
      title: 'Właściwości CSS',
    }, 
    {
      icon: 'credit_card',
      route: 'css-basics/klasa-identyfikator',
      title: 'Klasa i Identyfikator',
    }, 
    {
      icon: 'table_chart',
      route: 'css-basics/tabele-css',
      title: 'Tabele CSS',
    }, 
    {
      icon: 'line_style',
      route: 'css-basics/pseudoelementy',
      title: 'Pseudoelementy',
    }, 
    {
      icon: 'line_style',
      route: 'css-basics/pseudoelementy-basn',
      title: 'Pseudoelementy - Baśń',
    }, 
    {
      icon: 'build',
      route: 'css-basics/selektor-elementu',
      title: 'Selektor Elementu',
    }, 
    {
      icon: 'build',
      route: 'css-basics/selektor-atrybutu',
      title: 'Selektor Atrybutu',
    }, 
    {
      icon: 'build',
      route: 'css-basics/selektor-atrybutu-2',
      title: 'Selektor Atrybutu 2',
    }, 
    {
      icon: 'build',
      route: 'css-basics/selektor-atrybutu-3',
      title: 'Selektor Atrybutu 3',
    }, 
  ];
  Multimedia: ROUTE[] = [
    {
      icon: 'movie',
      route: 'html-basics/multimedia',
      title: 'Multimedia',
    }, 
  ];

}
