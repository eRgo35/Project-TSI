import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-zdjecia',
  templateUrl: './zdjecia.component.html'
})
export class ZdjeciaComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Zdjęcia");
  }

}
