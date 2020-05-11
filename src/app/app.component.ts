import { Component, OnInit } from '@angular/core';
import { TitleService } from './shared/services/title.service';
import { CookieService } from 'ngx-cookie-service';
import { ThemeService } from './shared/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = '';
  cookieValue = 'UNKNOWN';

  constructor(
    private titleService: TitleService, 
    private cookieService: CookieService, 
    private themeService: ThemeService,
    ) { }

  ngOnInit() {
  }

}
