import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-pseudoelementy-basn',
  templateUrl: './pseudoelementy-basn.component.html'
})
export class PseudoelementyBasnComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Pseudoelementy - Baśń");
  }

}
