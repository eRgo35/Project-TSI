import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html'
})
export class FormularzComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Formularz");
  }

}
