import { Component, OnInit } from '@angular/core';
import { titleService } from './title.service';
import { CookieService } from 'ngx-cookie-service';

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
  cookieValue = 'UNKNOWN';

  constructor(private titleService: titleService, private cookieService: CookieService) { }

  themeToggle = false;

  changeTheme() {
    
    var wrap = document.getElementById('main_wrapper');

    if (this.themeToggle === false) {
      wrap.className = "dark-theme";
      this.cookieService.set( 'theme', 'dark', 1337 );
    }
    else if (this.themeToggle === true) {
      wrap.className = "light-theme";
      this.cookieService.set( 'theme', 'light', 1337 );
    }
  }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('theme');
    var wrap = document.getElementById('main_wrapper');
    
    if (this.cookieValue == "light") {
      wrap.className = "light-theme";
      this.themeToggle = false;
    }
    else if (this.cookieValue == "dark") {
      wrap.className = "dark-theme";
      this.themeToggle = true;
    }
  
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
  Animations: ROUTE[] = [
    {
      icon: 'desktop_windows',
      route: 'animations/windows-xp',
      title: 'Windows XP',
    }, 
    {
      icon: 'bubble_chart',
      route: 'animations/zulu',
      title: 'Animacja Zulu',
    },
    {
      icon: 'loop',
      route: 'animations/loading',
      title: 'Animacja Ładowania',
    },
  ];
  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
        return true;
    } else {
        return false;
    }
  }

}
