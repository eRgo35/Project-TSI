import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-selektor-elementu',
  templateUrl: './selektor-elementu.component.html'
})
export class SelektorElementuComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Selektor Elementu");
  }

}
