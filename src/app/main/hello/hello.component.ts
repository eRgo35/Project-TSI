import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

export interface Cards {
  img: string;
  header: string;
  more: string;
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
  cards: Cards[] = [
    {img: 'school', header: 'Nauczyciele', more: 'Wprowadzenie do HTML.', url: 'html-basics/nauczyciele'},
    {img: 'panorama', header: 'Zdjęcia', more: 'Załączanie zdjęć oraz <marquee>.', url: 'html-basics/zdjecia'},
    {img: 'table_chart', header: 'Tabela', more: 'Podstawy tworzenia tabel.', url: 'html-basics/tabela'},
    {img: 'format_list_bulleted', header: 'Listy', more: 'Podstawy tworzenia list.', url: 'html-basics/listy'},
    {img: 'assignment', header: 'Formularz', more: 'Postawy tworzenia formularzy.', url: 'html-basics/formularz'},
    {img: 'table_view', header: 'Tabela Zaliczenie', more: 'Sprawdzian z tabel.', url: 'html-basics/tabela-spr'},
    {img: 'toc', header: 'Listy Zaliczenie', more: 'Sprawdzian z list.', url: 'html-basics/listy-spr'},
    {img: 'assignment', header: 'Formularz Zaliczenie', more: 'Sprawdzian z formularzy.', url: 'html-basics/formularz-spr'},
    {img: 'palette', header: 'Podstawy CSS', more: 'Wprowadzenie do CSS.', url: 'css-basics/wlasciwosci-css'},
    {img: 'select_all', header: 'Klasa i Identyfikator', more: 'Stylowanie elementów.', url: 'css-basics/klasa-identyfikator'},
    {img: 'backup_table', header: 'Tabele CSS', more: 'Wprowadzenie do stylowania tabel.', url: 'css-basics/tabele-css'},
    {img: 'flip_to_front', header: 'Pseudoelementy', more: 'Wprowadzenie do pseudoelementów.', url: 'css-basics/pseudoelementy'},
    {img: 'book', header: 'Pseudoelementy - Baśń', more: 'Sprawdzian z pseudoelementów.', url: 'css-basics/pseudoelementy-basn'},
    {img: 'filter_1', header: 'Selektor Elementu', more: 'Selektory część pierwsza.', url: 'css-basics/selektor-elementu'},
    {img: 'filter_2', header: 'Selektor Atrybutu', more: 'Selektory część druga.', url: 'css-basics/selektor-atrybutu'},
    {img: 'filter_3', header: 'Selektor Atrybutu 2', more: 'Selektory część trzecia.', url: 'css-basics/selektor-atrybutu-2'},
    {img: 'filter_4', header: 'Selektor Atrybutu 3', more: 'Selektory część czwarta.', url: 'css-basics/selektor-atrybutu-3'},
    {img: 'home', header: 'Windows XD', more: 'Animacja uruchamiania systemu.', url: 'animations/windows-xd'},
    {img: 'timeline', header: 'Animacja Zulu', more: 'Prosta animacja "Z".', url: 'animations/zulu'},
    {img: 'hourglass_bottom', header: 'Animacja Ładowania', more: 'Złożona animacja ładowania.', url: 'animations/loading'},
  ];
}
