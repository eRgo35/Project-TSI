import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-tabela-spr',
  templateUrl: './tabela-spr.component.html'
})
export class TabelaSprComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Tabela Zaliczenie");
  }

}
