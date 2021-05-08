import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-pozycjonowanie1',
  template: `<iframe src="../../../../assets/html-pages/pozycjonowanie/index.html" style="border: none; width: 100%; height: 100vh; background: white;"></iframe>`,
  styles: [
  ]
})
export class Pozycjonowanie1Component implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Pozycjonowanie 1");
  }

}
