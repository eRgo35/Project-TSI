import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-listyspr',
  templateUrl: './listy-spr.component.html'
})
export class ListySprComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Listy Zaliczenie");
  }

}
