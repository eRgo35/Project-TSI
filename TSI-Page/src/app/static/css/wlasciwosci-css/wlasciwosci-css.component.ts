import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-wlasciwosci-css',
  templateUrl: './wlasciwosci-css.component.html'
})
export class WlasciwosciCssComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Właściwości CSS");
  }

}
