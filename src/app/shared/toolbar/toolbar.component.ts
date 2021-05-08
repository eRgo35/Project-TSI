import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Option } from "../theme/option.model";
import { ThemeService } from "../theme/theme.service";

export interface Version {
  name: string;
  url: string;
}
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

  versions: Version[] = [
    {name: '1.1', url: 'https://tsi1.mczyz.ml/1.1'},
    {name: '1.5', url: 'https://tsi1.mczyz.ml/1.5'},
    {name: '2.0.26', url: 'https://tsi2.mczyz.ml'},
    {name: '3.1.2', url: 'https://tsi3.mczyz.ml'},
    {name: '4.1.0', url: '/'}
  ];
  
  onVersionChanged(version) {
      window.location.href = version;
  }
}
