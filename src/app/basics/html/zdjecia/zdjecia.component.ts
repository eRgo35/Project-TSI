import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-zdjecia',
  templateUrl: './zdjecia.component.html'
})
export class ZdjeciaComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Zdjęcia");
  }

}
