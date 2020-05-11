import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-pozycjonowanie3',
  template: `<iframe src="../../../../assets/html-pages/pozycjonowanie2/index.html" style="border: none; width: 100%; height: 100vh"></iframe>`,
  styles: [
  ]
})
export class Pozycjonowanie3Component implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Pozycjonowanie 3");
  }

}
