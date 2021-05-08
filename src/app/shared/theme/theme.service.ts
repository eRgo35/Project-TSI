import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';

import { Option } from "./option.model";
import { StyleManagerService } from "./style-manager.service";

@Injectable()
export class ThemeService {
  constructor(
    private http: HttpClient, 
    private styleManager: StyleManagerService, 
    private cookieService: CookieService
  ) { }

  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>("../../assets/options.json");
  }

  setTheme(themeToSet) {
    if (themeToSet == "pink-bluegrey" || themeToSet == "purple-green") {
        document.getElementById("theme-body").classList.add("dark-theme");
        document.getElementById("menu-box").classList.add("dark-menu");
        document.getElementById("menu-box-sm").classList.add("dark-menu");
    }
    else if (themeToSet == "deeppurple-amber" || themeToSet == "indigo-pink") {
      if (document.getElementById("theme-body").classList.value == "dark-theme") {
        document.getElementById("theme-body").classList.remove("dark-theme");
        document.getElementById("menu-box").classList.remove("dark-menu");
        document.getElementById("menu-box-sm").classList.remove("dark-menu");
      }
    }
    this.cookieService.set('theme', themeToSet, 1337);
    this.styleManager.setStyle(
      "theme",
      `../../assets/themes/${themeToSet}.css`
    );
  }
}