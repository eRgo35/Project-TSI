import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-selektor-atrybutu',
  templateUrl: './selektor-atrybutu.component.html'
})
export class SelektorAtrybutuComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Selektor Atrybutu");
  }

}
