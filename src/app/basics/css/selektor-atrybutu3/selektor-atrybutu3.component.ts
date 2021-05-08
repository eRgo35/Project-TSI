import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';


@Component({
  selector: 'app-selektor-atrybutu3',
  templateUrl: './selektor-atrybutu3.component.html',
  styles: [
  ]
})
export class SelektorAtrybutu3Component implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Selektor Atrybutu 3");
  }

}
