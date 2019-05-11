import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-listy',
  templateUrl: './listy.component.html'
})
export class ListyComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Listy");
  }

}
