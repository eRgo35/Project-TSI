import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-formularz-spr',
  templateUrl: './formularz-spr.component.html'
})
export class FormularzSprComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Formularz Zaliczenie");
  }

}
