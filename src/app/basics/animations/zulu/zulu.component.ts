import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-zulu',
  templateUrl: './zulu.component.html',
  styles: [
  ]
})
export class ZuluComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Animacja Zulu");
  }

}
