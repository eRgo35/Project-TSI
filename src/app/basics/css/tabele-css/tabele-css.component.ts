import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';


@Component({
  selector: 'app-tabele-css',
  templateUrl: './tabele-css.component.html',
  styles: [
  ]
})
export class TabeleCssComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Tabele CSS");
  }

}
