import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-klasa-identyfikator',
  templateUrl: './klasa-identyfikator.component.html'
})
export class KlasaIdentyfikatorComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Klasa i Identyfikator");
  }

}
