import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-zwierzeta',
  template: `<iframe src="../../../../assets/html-pages/zwierzeta/index.html" style="border: none; width: 100%; height: 100vh"></iframe>`,
  styles: [
  ]
})
export class ZwierzetaComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Zwierzęta");
  }

}
