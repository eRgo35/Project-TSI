import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-selektor-atrybutu2',
  templateUrl: './selektor-atrybutu2.component.html'
})
export class SelektorAtrybutu2Component implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Selektor Atrybutu 2");
  }

}
