import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-pseudoelementy',
  templateUrl: './pseudoelementy.component.html'
})
export class PseudoelementyComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Pseudoelementy");
  }

}
