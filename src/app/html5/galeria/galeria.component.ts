import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-galeria',
  template: `<iframe src="../../../../assets/html-pages/galeria/index.html" scrolling="no" style="border: none; width: 100%; height: 100vh; background: white;"></iframe>`,
  styles: [
  ]
})
export class GaleriaComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Galeria");
  }

}
