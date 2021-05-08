import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-tabele-css',
  templateUrl: './tabele-css.component.html'
})
export class TabeleCssComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Tabele CSS");
  }

}
