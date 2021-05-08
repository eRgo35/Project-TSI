import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-windows-xp',
  templateUrl: './windows-xp.component.html',
  styles: [
  ]
})
export class WindowsXpComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Animacja Windows XD");
  }

}
