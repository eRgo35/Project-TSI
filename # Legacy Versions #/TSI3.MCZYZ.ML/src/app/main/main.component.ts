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
    {name: 'Wersja 1.1', url: 'https://tsi1.mczyz.ml/1.1'},
    {name: 'Wersja 1.5', url: 'https://tsi1.mczyz.ml/1.5'},
    {name: 'Wersja 2.0.26', url: 'https://tsi2.mczyz.ml'},
    {name: 'Wersja 3.1.2', url: '/'}
  ];

  selected = '';
}
