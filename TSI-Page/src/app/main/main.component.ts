import { Component, OnInit } from '@angular/core';
import { titleService } from '../title.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Strona Główna");
  }

}
