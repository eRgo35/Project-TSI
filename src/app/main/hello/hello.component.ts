import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

export interface Version {
  name: string;
  url: string;
}

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Strona Główna");
  }

  versions: Version[] = [
    {name: 'Wersja 1.1', url: 'https://tsi1.mczyz.ml/1.1'},
    {name: 'Wersja 1.5', url: 'https://tsi1.mczyz.ml/1.5'},
    {name: 'Wersja 2.0.26', url: 'https://tsi2.mczyz.ml'},
    {name: 'Wersja 3.1.2', url: 'https://tsi3.mczyz.ml'},
    {name: 'Wersja 4.0.2', url: '/'}
  ];

  selected = '';

}
