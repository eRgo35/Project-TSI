import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-pseudoelementy',
  templateUrl: './pseudoelementy.component.html',
  styles: [
  ]
})
export class PseudoelementyComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Pseudoelementy");
  }

}
