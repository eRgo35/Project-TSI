import { Component, OnInit } from '@angular/core';
import { titleService } from '../title.service';

export interface Version {
  name: string;
  url: string;
}

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

  versions: Version[] = [
    {name: 'Wersja 1.1', url: '../../content/legacy/v.1.1/index.html'},
    {name: 'Wersja 1.5', url: '../../content/legacy/v.1.5/index.html'},
    {name: 'Wersja 2.0.26', url: '../../content/legacy/v.2.0.26/index.php'},
    {name: 'Wersja 3.0.0 Pre-Release 1', url: '/'}
  ];

}
