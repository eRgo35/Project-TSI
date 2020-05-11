import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-klasa-identyfikator',
  templateUrl: './klasa-identyfikator.component.html',
  styles: [
  ]
})
export class KlasaIdentyfikatorComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Klasa i Identyfikator");
  }

}
