import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html'
})
export class MultimediaComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Multimedia");
  }

}
