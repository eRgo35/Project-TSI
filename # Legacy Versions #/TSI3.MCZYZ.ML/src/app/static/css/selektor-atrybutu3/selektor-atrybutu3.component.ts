import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-selektor-atrybutu3',
  templateUrl: './selektor-atrybutu3.component.html'
})
export class SelektorAtrybutu3Component implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Selektor Atrybutu 3");
  }

}
