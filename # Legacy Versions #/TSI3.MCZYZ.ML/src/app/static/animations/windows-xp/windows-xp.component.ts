import { Component, OnInit } from '@angular/core';
import { titleService } from '../../../title.service';

@Component({
  selector: 'app-windows-xp',
  templateUrl: './windows-xp.component.html',
  styleUrls: ['./windows-xp.component.css']
})
export class WindowsXpComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Windows XD");
  }

}
