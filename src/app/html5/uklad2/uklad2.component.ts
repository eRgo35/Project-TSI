import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-uklad2',
  template: `<iframe src="../../../../assets/html-pages/uklad2/uklad2.html" style="border: none; width: 100%; height: 100vh"></iframe>`,
  styles: [
  ]
})
export class Uklad2Component implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Układ 2");
  }

}
