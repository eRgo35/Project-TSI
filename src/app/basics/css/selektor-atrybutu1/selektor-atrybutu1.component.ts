import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';


@Component({
  selector: 'app-selektor-atrybutu1',
  templateUrl: './selektor-atrybutu1.component.html',
  styles: [
  ]
})
export class SelektorAtrybutu1Component implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Selektor Atrybutu");
  }

}
