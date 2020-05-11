import { Component, OnInit } from '@angular/core';
import { titleService } from '../../../title.service';

@Component({
  selector: 'app-zulu',
  templateUrl: './zulu.component.html',
  styleUrls: ['./zulu.component.css']
})
export class ZuluComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Animacja Zulu");
  }

}
