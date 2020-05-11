import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-uklad1',
  template: `<iframe src="../../../../assets/html-pages/uklad1/index.html" style="border: none; width: 100%; height: 100vh"></iframe>`,
  styles: [
  ]
})
export class Uklad1Component implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Układ 1");
  }

}
