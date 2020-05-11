import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';


@Component({
  selector: 'app-wlasciwosci-css',
  templateUrl: './wlasciwosci-css.component.html',
  styles: [
  ]
})
export class WlasciwosciCssComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Właściwości CSS");
  }

}
