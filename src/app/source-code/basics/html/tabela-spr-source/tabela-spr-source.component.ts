import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-tabela-spr-source',
  template: `
  <mat-tab-group mat-align-tabs="start">
    <mat-tab label="HTML">
      <iframe #iframe scrolling="no" style="border: none; width: 100%; height: 150vh;" type="text/javascript"></iframe>
    </mat-tab>
  </mat-tab-group>
  `
})
export class TabelaSprSourceComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Nauczyciele");
  }

  gistUrl = "https://gist.github.com/eRgo35/6e291426668278252aa1e5a627020c8f.js";

  ngAfterViewInit() {
    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    const content = `
        <base target="_parent">
        <script type="text/javascript" src="${this.gistUrl}"></script>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }

}
