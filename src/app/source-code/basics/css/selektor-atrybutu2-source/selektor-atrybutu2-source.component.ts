import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-selektor-atrybutu2-source',
  template: `
  <mat-tab-group mat-align-tabs="start">
    <mat-tab label="HTML i CSS">
      <iframe #iframe onload="resizeIframe(this)" style="border: none; width: 100%;" type="text/javascript"></iframe>
    </mat-tab>
  </mat-tab-group>
  `
})
export class SelektorAtrybutu2SourceComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Selektor Atrybutu 2 (Kod źródłowy)");
  }

  gistUrl = "https://gist.github.com/eRgo35/d138df3a77a38f3d5d80cc5f907f2ca8.js";

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
