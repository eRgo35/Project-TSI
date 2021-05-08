import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-listy-spr',
  templateUrl: './listy-spr.component.html'
})
export class ListySprComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Listy Zaliczenie");
  }

}
