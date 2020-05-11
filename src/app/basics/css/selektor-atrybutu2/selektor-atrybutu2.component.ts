import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';


@Component({
  selector: 'app-selektor-atrybutu2',
  templateUrl: './selektor-atrybutu2.component.html',
  styles: [
  ]
})
export class SelektorAtrybutu2Component implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Selektor Atrybutu 2");
  }

}
