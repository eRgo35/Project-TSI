import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-tabela-source',
  template: `
  <mat-tab-group mat-align-tabs="start">
    <mat-tab label="HTML">
      <iframe #iframe scrolling="no" style="border: none; width: 100%; height: 720vh;" type="text/javascript"></iframe>
    </mat-tab>
  </mat-tab-group>
  `
})
export class TabelaSourceComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Nauczyciele");
  }

  gistUrl = "https://gist.github.com/5a9f2f9dadfff1f7093c10c0e3fc2e2d.js";

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
