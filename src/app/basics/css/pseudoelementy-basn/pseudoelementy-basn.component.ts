import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';


@Component({
  selector: 'app-pseudoelementy-basn',
  templateUrl: './pseudoelementy-basn.component.html',
  styles: [
  ]
})
export class PseudoelementyBasnComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Pseudoelementy - Baśń");
  }

}
