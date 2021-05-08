import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-tabelaspr',
  templateUrl: './tabela-spr.component.html'
})
export class TabelaSprComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Tabela Zaliczenie");
  }

}
