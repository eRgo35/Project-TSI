import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';


@Component({
  selector: 'app-selektor-elementu',
  templateUrl: './selektor-elementu.component.html',
  styles: [
  ]
})
export class SelektorElementuComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Selektor Elementu");
  }

}
