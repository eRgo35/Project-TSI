import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Option } from "../theme/option.model";
import { ThemeService } from "../theme/theme.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();
  title = "";

  constructor(private readonly themeService: ThemeService) { }

  ngOnInit() {
    // this.themeService.setTheme("deeppurple-amber");
  }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }

}
