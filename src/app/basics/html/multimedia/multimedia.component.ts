import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styles: [
  ]
})
export class MultimediaComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Multimedia");
  }

}
