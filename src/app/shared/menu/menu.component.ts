import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WrapperComponent } from 'src/app/main/wrapper/wrapper.component';
import { ThemeService } from '../theme/theme.service';
import { CookieService } from 'ngx-cookie-service';


declare var $: any;

interface ROUTE {
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-menu-sm',
  templateUrl: './menu-sm.component.html',
  styleUrls: ['./menu-sm.component.scss']
})
export class MenuSmComponent implements OnInit {
  
  constructor(private wrapperComponent: WrapperComponent) { }

  ngOnInit(): void {
  }

  closeMenuMobile() {
    this.wrapperComponent.sidenav.close();
  }

  toggleSmMenuHTML() {
    if (document.getElementById("html-icon-sm").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-sm-html").style.display = "none";
      document.getElementById("html-icon-sm").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-sm-html").style.display = "block";
      document.getElementById("html-icon-sm").innerHTML = "keyboard_arrow_up";
    }
  }
  toggleSmMenuCSS() {
    if (document.getElementById("css-icon-sm").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-sm-css").style.display = "none";
      document.getElementById("css-icon-sm").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-sm-css").style.display = "block";
      document.getElementById("css-icon-sm").innerHTML = "keyboard_arrow_up";
    }
  }
  toggleSmMenuHTML5() {
    if (document.getElementById("html5-icon-sm").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-sm-html5").style.display = "none";
      document.getElementById("html5-icon-sm").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-sm-html5").style.display = "block";
      document.getElementById("html5-icon-sm").innerHTML = "keyboard_arrow_up";
    }
  }
  toggleSmMenuAnim() {
    if (document.getElementById("anim-icon-sm").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-sm-anim").style.display = "none";
      document.getElementById("anim-icon-sm").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-sm-anim").style.display = "block";
      document.getElementById("anim-icon-sm").innerHTML = "keyboard_arrow_up";
    }
  }
  toggleSmMenuDocs() {
    if (document.getElementById("docs-icon-sm").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-sm-docs").style.display = "none";
      document.getElementById("docs-icon-sm").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-sm-docs").style.display = "block";
      document.getElementById("docs-icon-sm").innerHTML = "keyboard_arrow_up";
    }
  }
  toggleSmMenuMulti() {
    if (document.getElementById("multi-icon-sm").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-sm-multi").style.display = "none";
      document.getElementById("multi-icon-sm").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-sm-multi").style.display = "block";
      document.getElementById("multi-icon-sm").innerHTML = "keyboard_arrow_up";
    }
  }

  HtmlBasics: ROUTE[] = [
    {
      route: 'html-basics/nauczyciele',
      title: 'Nauczyciele',
    },
    {
      route: 'html-basics/zdjecia',
      title: 'Zdjęcia',
    },
    {
      route: 'html-basics/tabela',
      title: 'Tabela',
    },
    {
      route: 'html-basics/listy',
      title: 'Listy',
    },
    {
      route: 'html-basics/formularz',
      title: 'Formularz',
    },
    {
      route: 'html-basics/tabela-spr',
      title: 'Tabela Zaliczenie',
    },
    {
      route: 'html-basics/listy-spr',
      title: 'Listy Zaliczenie',
    },
    {
      route: 'html-basics/formularz-spr',
      title: 'Formularz Zaliczenie',
    }
  ];

  CssBasics: ROUTE[] = [
    {
      route: 'css-basics/wlasciwosci-css',
      title: 'Właściwości CSS',
    },
    {
      route: 'css-basics/klasa-identyfikator',
      title: 'Klasa i Identyfikator',
    },
    {
      route: 'css-basics/tabele-css',
      title: 'Tabele CSS',
    },
    {
      route: 'css-basics/pseudoelementy',
      title: 'Pseudoelementy',
    },
    {
      route: 'css-basics/pseudoelementy-basn',
      title: 'Pseudoelementy - Baśń',
    },
    {
      route: 'css-basics/selektor-elementu',
      title: 'Selektor Elementu',
    },
    {
      route: 'css-basics/selektor-atrybutu',
      title: 'Selektor Atrybutu',
    },
    {
      route: 'css-basics/selektor-atrybutu-2',
      title: 'Selektor Atrybutu 2',
    },
    {
      route: 'css-basics/selektor-atrybutu-3',
      title: 'Selektor Atrybutu 3',
    },
  ];

  Multimedia: ROUTE[] = [
    {
      route: 'html-basics/multimedia',
      title: 'Multimedia',
    },
  ];

  Animations: ROUTE[] = [
    {
      route: 'animations/windows-xd',
      title: 'Windows XD',
    },
    {
      route: 'animations/zulu',
      title: 'Animacja Zulu',
    },
    {
      route: 'animations/loading',
      title: 'Animacja Ładowania',
    },
  ];

  Html5Pages: ROUTE[] = [
    {
      route: 'html5/uklad1',
      title: 'Układ 1',
    },
    {
      route: 'html5/uklad2',
      title: 'Układ 2',
    },
    {
      route: 'html5/zwierzeta',
      title: 'Zwierzęta',
    },
    {
      route: 'html5/galeria',
      title: 'Galeria',
    },
    {
      route: 'html5/menu',
      title: 'Menu',
    },
    {
      route: 'html5/pozycjonowanie1',
      title: 'Pozycjonowanie 1',
    },
    {
      route: 'html5/pozycjonowanie2',
      title: 'Pozycjonowanie 2',
    },
    {
      route: 'html5/pozycjonowanie3',
      title: 'Pozycjonowanie 3',
    },
  ];

  Documents: ROUTE[] = [
    {
      route: '../../assets/docs/lista.docx',
      title: 'Lista - Word',
    },
    {
      route: '../../assets/docs/lista.pdf',
      title: 'Lista - PDF',
    },
    {
      route: '../../assets/files/Budowa-Strony-HTML5.zip',
      title: 'Budowa Strony HTML5',
    },
  ];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  constructor(private wrapperComponent: WrapperComponent, private themeService: ThemeService, private cookieService: CookieService) { }

  ngAfterViewInit() {
    this.themeService.setTheme(this.cookieService.get('theme'));
  }

  closeMenuMobile() {
    this.wrapperComponent.sidenav.close();
  }

  toggleMenuHTML() {
    if (document.getElementById("html-icon").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-html").style.display = "none";
      document.getElementById("html-icon").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-html").style.display = "block";
      document.getElementById("html-icon").innerHTML = "keyboard_arrow_up";
    }
  }
  toggleMenuCSS() {
    if (document.getElementById("css-icon").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-css").style.display = "none";
      document.getElementById("css-icon").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-css").style.display = "block";
      document.getElementById("css-icon").innerHTML = "keyboard_arrow_up";
    }
  }
  toggleMenuHTML5() {
    if (document.getElementById("html5-icon").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-html5").style.display = "none";
      document.getElementById("html5-icon").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-html5").style.display = "block";
      document.getElementById("html5-icon").innerHTML = "keyboard_arrow_up";
    }
  }
  toggleMenuAnim() {
    if (document.getElementById("anim-icon").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-anim").style.display = "none";
      document.getElementById("anim-icon").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-anim").style.display = "block";
      document.getElementById("anim-icon").innerHTML = "keyboard_arrow_up";
    }
  }
  toggleMenuDocs() {
    if (document.getElementById("docs-icon").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-docs").style.display = "none";
      document.getElementById("docs-icon").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-docs").style.display = "block";
      document.getElementById("docs-icon").innerHTML = "keyboard_arrow_up";
    }
  }
  toggleMenuMulti() {
    if (document.getElementById("multi-icon").innerHTML == "keyboard_arrow_up") {
      document.getElementById("cat-multi").style.display = "none";
      document.getElementById("multi-icon").innerHTML = "keyboard_arrow_down";
    }
    else {
      document.getElementById("cat-multi").style.display = "block";
      document.getElementById("multi-icon").innerHTML = "keyboard_arrow_up";
    }
  }

  HtmlBasics: ROUTE[] = [
    {
      route: 'html-basics/nauczyciele',
      title: 'Nauczyciele',
    },
    {
      route: 'html-basics/zdjecia',
      title: 'Zdjęcia',
    },
    {
      route: 'html-basics/tabela',
      title: 'Tabela',
    },
    {
      route: 'html-basics/listy',
      title: 'Listy',
    },
    {
      route: 'html-basics/formularz',
      title: 'Formularz',
    },
    {
      route: 'html-basics/tabela-spr',
      title: 'Tabela Zaliczenie',
    },
    {
      route: 'html-basics/listy-spr',
      title: 'Listy Zaliczenie',
    },
    {
      route: 'html-basics/formularz-spr',
      title: 'Formularz Zaliczenie',
    }
  ];

  CssBasics: ROUTE[] = [
    {
      route: 'css-basics/wlasciwosci-css',
      title: 'Właściwości CSS',
    },
    {
      route: 'css-basics/klasa-identyfikator',
      title: 'Klasa i Identyfikator',
    },
    {
      route: 'css-basics/tabele-css',
      title: 'Tabele CSS',
    },
    {
      route: 'css-basics/pseudoelementy',
      title: 'Pseudoelementy',
    },
    {
      route: 'css-basics/pseudoelementy-basn',
      title: 'Pseudoelementy - Baśń',
    },
    {
      route: 'css-basics/selektor-elementu',
      title: 'Selektor Elementu',
    },
    {
      route: 'css-basics/selektor-atrybutu',
      title: 'Selektor Atrybutu',
    },
    {
      route: 'css-basics/selektor-atrybutu-2',
      title: 'Selektor Atrybutu 2',
    },
    {
      route: 'css-basics/selektor-atrybutu-3',
      title: 'Selektor Atrybutu 3',
    },
  ];

  Multimedia: ROUTE[] = [
    {
      route: 'html-basics/multimedia',
      title: 'Multimedia',
    },
  ];

  Animations: ROUTE[] = [
    {
      route: 'animations/windows-xd',
      title: 'Windows XD',
    },
    {
      route: 'animations/zulu',
      title: 'Animacja Zulu',
    },
    {
      route: 'animations/loading',
      title: 'Animacja Ładowania',
    },
  ];

  Html5Pages: ROUTE[] = [
    {
      route: 'html5/uklad1',
      title: 'Układ 1',
    },
    {
      route: 'html5/uklad2',
      title: 'Układ 2',
    },
    {
      route: 'html5/zwierzeta',
      title: 'Zwierzęta',
    },
    {
      route: 'html5/galeria',
      title: 'Galeria',
    },
    {
      route: 'html5/menu',
      title: 'Menu',
    },
    {
      route: 'html5/pozycjonowanie1',
      title: 'Pozycjonowanie 1',
    },
    {
      route: 'html5/pozycjonowanie2',
      title: 'Pozycjonowanie 2',
    },
    {
      route: 'html5/pozycjonowanie3',
      title: 'Pozycjonowanie 3',
    },
  ];

  Documents: ROUTE[] = [
    {
      route: '../../assets/docs/lista.docx',
      title: 'Lista - Word',
    },
    {
      route: '../../assets/docs/lista.pdf',
      title: 'Lista - PDF',
    },
    {
      route: '../../assets/files/Budowa-Strony-HTML5.zip',
      title: 'Budowa Strony HTML5',
    },
  ];
}
