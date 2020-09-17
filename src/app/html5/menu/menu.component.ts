import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-menu-5',
  template: `<iframe src="../../../../assets/html-pages/menu/index.html" style="border: none; width: 100%; height: 200vh; background: white;"></iframe>`,
  styles: [
  ]
})
export class MenuComponent5 implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Menu");
  }

}
