import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-tabele-css-source',
  template: `
  <mat-tab-group mat-align-tabs="start">
    <mat-tab label="HTML i CSS">
      <iframe #iframe onload="resizeIframe(this)" style="border: none; width: 100%;" type="text/javascript"></iframe>
    </mat-tab>
  </mat-tab-group>
  `,
  styles: [
  ]
})
export class TabeleCssSourceComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Tabele CSS (Kod źródłowy)");
  }

  gistUrl = "https://gist.github.com/eRgo35/a90483e906af23000e366747b6016714.js";

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
